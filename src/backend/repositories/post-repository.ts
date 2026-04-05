import { Effect } from "effect";
import {
  Post,
  PostNotFoundError,
  PostSummary,
  SlugConflictError,
  type PostStatus,
  type PostWithContent,
} from "../domain/post";

export type { Post, PostSummary, PostWithContent, PostNotFoundError, SlugConflictError };

const encoder = new TextEncoder();

export type CreatePostInput = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status?: PostStatus;
  publishedAt?: string;
};

export type UpdatePostInput = {
  title?: string;
  excerpt?: string;
  content?: string;
  status?: PostStatus;
  publishedAt?: string;
};

type RawPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: string;
  publishedAt: string;
  updatedAt: string;
  contentKey: string;
  contentType: string;
  contentLength: number | null;
  contentHash: string | null;
};

type RawPostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

function toPost(raw: RawPost): Post {
  return new Post({
    ...raw,
    status: raw.status === "draft" ? "draft" : "published",
  });
}

function computeContentMeta(content: string): Effect.Effect<{ length: number; hash: string }> {
  return Effect.promise(async () => {
    const bytes = encoder.encode(content);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    const hash = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return { length: bytes.length, hash };
  });
}

function readContent(
  bucket: R2Bucket,
  contentKey: string,
): Effect.Effect<{ content: string | null; etag: string | null }> {
  return Effect.promise(async () => {
    const object = await bucket.get(contentKey);
    if (!object) return { content: null, etag: null };
    const content = await object.text();
    return { content, etag: object.etag ?? null };
  });
}

function queryPostBySlug(db: D1Database, slug: string): Effect.Effect<Post | null> {
  return Effect.promise(() =>
    db
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
      .first<RawPost>()
      .then((r) => (r ? toPost(r) : null)),
  );
}

function queryPublishedPostBySlug(db: D1Database, slug: string): Effect.Effect<Post | null> {
  return Effect.promise(() =>
    db
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
      .first<RawPost>()
      .then((r) => (r ? toPost(r) : null)),
  );
}

export function listPublishedPosts(db: D1Database): Effect.Effect<PostSummary[]> {
  return Effect.promise(async () => {
    const result = await db
      .prepare(
        `SELECT id, slug, title, excerpt, published_at AS publishedAt
         FROM posts
         WHERE status = 'published'
         ORDER BY published_at DESC`,
      )
      .all<RawPostSummary>();
    return (result.results ?? []).map((r) => new PostSummary(r));
  });
}

export function listPosts(db: D1Database): Effect.Effect<Post[]> {
  return Effect.promise(async () => {
    const result = await db
      .prepare(
        `SELECT id, slug, title, excerpt, status,
            published_at AS publishedAt, updated_at AS updatedAt,
            content_key AS contentKey, content_type AS contentType,
            content_length AS contentLength, content_hash AS contentHash
         FROM posts
         ORDER BY published_at DESC`,
      )
      .all<RawPost>();
    return (result.results ?? []).map(toPost);
  });
}

export function getPublishedPostWithContent(
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Effect.Effect<PostWithContent, PostNotFoundError> {
  return Effect.gen(function* () {
    const post = yield* queryPublishedPostBySlug(db, slug);
    if (!post) return yield* Effect.fail(new PostNotFoundError({ slug }));
    const { content, etag } = yield* readContent(bucket, post.contentKey);
    return { post, content, etag };
  });
}

export function getPostWithContent(
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Effect.Effect<PostWithContent, PostNotFoundError> {
  return Effect.gen(function* () {
    const post = yield* queryPostBySlug(db, slug);
    if (!post) return yield* Effect.fail(new PostNotFoundError({ slug }));
    const { content, etag } = yield* readContent(bucket, post.contentKey);
    return { post, content, etag };
  });
}

export function createPost(
  db: D1Database,
  bucket: R2Bucket,
  input: CreatePostInput,
): Effect.Effect<Post, SlugConflictError> {
  return Effect.gen(function* () {
    const existing = yield* Effect.promise(() =>
      db
        .prepare("SELECT slug FROM posts WHERE slug = ? LIMIT 1")
        .bind(input.slug)
        .first<{ slug: string }>(),
    );

    if (existing) return yield* Effect.fail(new SlugConflictError({ slug: input.slug }));

    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const publishedAt = input.publishedAt ?? now;
    const status: PostStatus = input.status === "draft" ? "draft" : "published";
    const contentKey = `posts/${input.slug}.md`;
    const contentType = "text/markdown; charset=utf-8";
    const meta = yield* computeContentMeta(input.content);

    yield* Effect.promise(() =>
      bucket.put(contentKey, input.content, { httpMetadata: { contentType } }),
    );

    yield* Effect.promise(() =>
      db
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
        .run(),
    ).pipe(Effect.tapErrorCause(() => Effect.promise(() => bucket.delete(contentKey))));

    return new Post({
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
    });
  });
}

export function updatePost(
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
  input: UpdatePostInput,
): Effect.Effect<Post, PostNotFoundError> {
  return Effect.gen(function* () {
    const existing = yield* queryPostBySlug(db, slug);
    if (!existing) return yield* Effect.fail(new PostNotFoundError({ slug }));

    const title = input.title ?? existing.title;
    const excerpt = input.excerpt ?? existing.excerpt;
    const status: PostStatus = input.status ?? existing.status;
    const publishedAt = input.publishedAt ?? existing.publishedAt;
    const now = new Date().toISOString();

    let contentKey = existing.contentKey;
    let contentType = existing.contentType;
    let contentLength = existing.contentLength;
    let contentHash = existing.contentHash;

    if (input.content) {
      contentKey = `posts/${slug}.md`;
      contentType = "text/markdown; charset=utf-8";
      const meta = yield* computeContentMeta(input.content);
      contentLength = meta.length;
      contentHash = meta.hash;

      yield* Effect.promise(() =>
        bucket.put(contentKey, input.content as string, { httpMetadata: { contentType } }),
      );
    }

    yield* Effect.promise(() =>
      db
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
        .run(),
    );

    return new Post({
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
    });
  });
}

export function deletePost(
  db: D1Database,
  bucket: R2Bucket,
  slug: string,
): Effect.Effect<void, PostNotFoundError> {
  return Effect.gen(function* () {
    const existing = yield* Effect.promise(() =>
      db
        .prepare("SELECT content_key AS contentKey FROM posts WHERE slug = ? LIMIT 1")
        .bind(slug)
        .first<{ contentKey: string }>(),
    );

    if (!existing) return yield* Effect.fail(new PostNotFoundError({ slug }));

    yield* Effect.promise(() => db.prepare("DELETE FROM posts WHERE slug = ?").bind(slug).run());
    yield* Effect.promise(() => bucket.delete(existing.contentKey));
  });
}
