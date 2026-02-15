const encoder = new TextEncoder()

type PostBase = {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
}

export type PostSummary = PostBase

export type PostRecord = PostBase & {
  updatedAt: string
  status: string
  contentKey: string
  contentType: string
  contentLength: number | null
  contentHash: string | null
}

export type PostWithContent = {
  post: PostRecord
  content: string | null
  etag: string | null
}

export type CreatePostInput = {
  slug: string
  title: string
  excerpt: string
  content: string
  status?: 'draft' | 'published'
  publishedAt?: string
}

export type CreatePostResult = { ok: true; post: PostRecord } | { ok: false; reason: 'slug_exists' }

export type UpdatePostInput = {
  title?: string
  excerpt?: string
  content?: string
  status?: 'draft' | 'published'
  publishedAt?: string
}

export type UpdatePostResult = { ok: true; post: PostRecord } | { ok: false; reason: 'not_found' }

export type DeletePostResult = { ok: true } | { ok: false; reason: 'not_found' }

const computeContentMeta = async (content: string) => {
  const bytes = encoder.encode(content)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  const hash = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return { length: bytes.length, hash }
}

const readContent = async (bucket: R2Bucket, contentKey: string) => {
  const object = await bucket.get(contentKey)
  if (!object) {
    return { content: null, etag: null }
  }
  const content = await object.text()
  return { content, etag: object.etag ?? null }
}

const getPostBySlug = async (db: D1Database, slug: string) =>
  await db
    .prepare(
      `SELECT id, slug, title, excerpt, status,
          published_at AS publishedAt, updated_at AS updatedAt,
          content_key AS contentKey, content_type AS contentType,
          content_length AS contentLength, content_hash AS contentHash
       FROM posts
       WHERE slug = ?
       LIMIT 1`,
    )
    .bind(slug)
    .first<PostRecord>()

const getPublishedPostBySlug = async (db: D1Database, slug: string) =>
  await db
    .prepare(
      `SELECT id, slug, title, excerpt, status,
          published_at AS publishedAt, updated_at AS updatedAt,
          content_key AS contentKey, content_type AS contentType,
          content_length AS contentLength, content_hash AS contentHash
       FROM posts
       WHERE slug = ? AND status = 'published'
       LIMIT 1`,
    )
    .bind(slug)
    .first<PostRecord>()

export const listPublishedPosts = async (db: D1Database) => {
  const result = await db
    .prepare(
      `SELECT id, slug, title, excerpt, published_at AS publishedAt
       FROM posts
       WHERE status = 'published'
       ORDER BY published_at DESC`,
    )
    .all<PostSummary>()
  return result.results ?? []
}

export const listPosts = async (db: D1Database) => {
  const result = await db
    .prepare(
      `SELECT id, slug, title, excerpt, status,
          published_at AS publishedAt, updated_at AS updatedAt,
          content_key AS contentKey, content_type AS contentType,
          content_length AS contentLength, content_hash AS contentHash
       FROM posts
       ORDER BY published_at DESC`,
    )
    .all<PostRecord>()
  return result.results ?? []
}

export const getPublishedPostWithContent = async (
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Promise<PostWithContent | null> => {
  const post = await getPublishedPostBySlug(db, slug)
  if (!post) return null
  const { content, etag } = await readContent(bucket, post.contentKey)
  return { post, content, etag }
}

export const getPostWithContent = async (
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Promise<PostWithContent | null> => {
  const post = await getPostBySlug(db, slug)
  if (!post) return null
  const { content, etag } = await readContent(bucket, post.contentKey)
  return { post, content, etag }
}

export const createPost = async (
  db: D1Database,
  bucket: R2Bucket,
  input: CreatePostInput,
): Promise<CreatePostResult> => {
  const existing = await db
    .prepare(`SELECT slug FROM posts WHERE slug = ? LIMIT 1`)
    .bind(input.slug)
    .first<{ slug: string }>()

  if (existing) {
    return { ok: false, reason: 'slug_exists' }
  }

  const id = crypto.randomUUID()
  const now = new Date().toISOString()
  const publishedAt = input.publishedAt ?? now
  const status = input.status === 'draft' ? 'draft' : 'published'
  const contentKey = `posts/${input.slug}.md`
  const contentType = 'text/markdown; charset=utf-8'
  const meta = await computeContentMeta(input.content)

  await bucket.put(contentKey, input.content, {
    httpMetadata: { contentType },
  })

  try {
    await db
      .prepare(
        `INSERT INTO posts (
          id, slug, title, excerpt, published_at, updated_at, status,
          content_key, content_type, content_length, content_hash
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        id,
        input.slug,
        input.title,
        input.excerpt,
        publishedAt,
        now,
        status,
        contentKey,
        contentType,
        meta.length,
        meta.hash,
      )
      .run()
  } catch (error) {
    await bucket.delete(contentKey)
    throw error
  }

  return {
    ok: true,
    post: {
      id,
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      status,
      publishedAt,
      updatedAt: now,
      contentKey,
      contentType,
      contentLength: meta.length,
      contentHash: meta.hash,
    },
  }
}

export const updatePost = async (
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
  input: UpdatePostInput,
): Promise<UpdatePostResult> => {
  const existing = await getPostBySlug(db, slug)
  if (!existing) {
    return { ok: false, reason: 'not_found' }
  }

  const title = input.title ?? existing.title
  const excerpt = input.excerpt ?? existing.excerpt
  const status = input.status ?? existing.status
  const publishedAt = input.publishedAt ?? existing.publishedAt
  const now = new Date().toISOString()

  let contentKey = existing.contentKey
  let contentType = existing.contentType
  let contentLength = existing.contentLength
  let contentHash = existing.contentHash

  if (input.content) {
    contentKey = `posts/${slug}.md`
    contentType = 'text/markdown; charset=utf-8'
    const meta = await computeContentMeta(input.content)
    contentLength = meta.length
    contentHash = meta.hash

    await bucket.put(contentKey, input.content, {
      httpMetadata: { contentType },
    })
  }

  await db
    .prepare(
      `UPDATE posts
       SET title = ?, excerpt = ?, status = ?, published_at = ?, updated_at = ?,
         content_key = ?, content_type = ?, content_length = ?, content_hash = ?
       WHERE slug = ?`,
    )
    .bind(
      title,
      excerpt,
      status,
      publishedAt,
      now,
      contentKey,
      contentType,
      contentLength,
      contentHash,
      slug,
    )
    .run()

  return {
    ok: true,
    post: {
      ...existing,
      title,
      excerpt,
      status,
      publishedAt,
      updatedAt: now,
      contentKey,
      contentType,
      contentLength,
      contentHash,
    },
  }
}

export const deletePost = async (
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Promise<DeletePostResult> => {
  const existing = await db
    .prepare(`SELECT content_key AS contentKey FROM posts WHERE slug = ? LIMIT 1`)
    .bind(slug)
    .first<{ contentKey: string }>()

  if (!existing) {
    return { ok: false, reason: 'not_found' }
  }

  await db.prepare(`DELETE FROM posts WHERE slug = ?`).bind(slug).run()
  await bucket.delete(existing.contentKey)

  return { ok: true }
}
