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
  contentLength: number | null;
  contentHash: string | null;
};

type RawPostWithContent = RawPost & {
  content: string;
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

function queryPostBySlug(db: D1Database, slug: string): Effect.Effect<Post | null> {
  return Effect.promise(() =>
    db
      .prepare(
        `SELECT id, slug, title, excerpt, status,
            published_at AS publishedAt, updated_at AS updatedAt,
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

function queryPostWithContentBySlug(
  db: D1Database,
  slug: string,
): Effect.Effect<RawPostWithContent | null> {
  return Effect.promise(() =>
    db
      .prepare(
        `SELECT id, slug, title, excerpt, status,
            published_at AS publishedAt, updated_at AS updatedAt,
            content, content_length AS contentLength, content_hash AS contentHash
         FROM posts
         WHERE slug = ?
         LIMIT 1`,
      )
      .bind(slug)
      .first<RawPostWithContent>(),
  );
}

function queryPublishedPostWithContentBySlug(
  db: D1Database,
  slug: string,
): Effect.Effect<RawPostWithContent | null> {
  return Effect.promise(() =>
    db
      .prepare(
        `SELECT id, slug, title, excerpt, status,
            published_at AS publishedAt, updated_at AS updatedAt,
            content, content_length AS contentLength, content_hash AS contentHash
         FROM posts
         WHERE slug = ? AND status = 'published'
         LIMIT 1`,
      )
      .bind(slug)
      .first<RawPostWithContent>(),
  );
}

export function listPosts(db: D1Database): Effect.Effect<Post[]> {
  return Effect.promise(async () => {
    const result = await db
      .prepare(
        `SELECT id, slug, title, excerpt, status,
            published_at AS publishedAt, updated_at AS updatedAt,
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
  slug: string,
): Effect.Effect<PostWithContent, PostNotFoundError> {
  return Effect.gen(function* () {
    const row = yield* queryPublishedPostWithContentBySlug(db, slug);
    if (!row) return yield* Effect.fail(new PostNotFoundError({ slug }));
    const { content, ...raw } = row;
    return { post: toPost(raw), content, etag: raw.contentHash };
  });
}

export function getPostWithContent(
  db: D1Database,
  slug: string,
): Effect.Effect<PostWithContent, PostNotFoundError> {
  return Effect.gen(function* () {
    const row = yield* queryPostWithContentBySlug(db, slug);
    if (!row) return yield* Effect.fail(new PostNotFoundError({ slug }));
    const { content, ...raw } = row;
    return { post: toPost(raw), content, etag: raw.contentHash };
  });
}

export function createPost(
  db: D1Database,
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
    const meta = yield* computeContentMeta(input.content);

    yield* Effect.promise(() =>
      db
        .prepare(
          `INSERT INTO posts (
            id, slug, title, excerpt, published_at, updated_at, status,
            content, content_length, content_hash
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .bind(
          id,
          input.slug,
          input.title,
          input.excerpt,
          publishedAt,
          now,
          status,
          input.content,
          meta.length,
          meta.hash,
        )
        .run(),
    );

    return new Post({
      id,
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      status,
      publishedAt,
      updatedAt: now,
      contentLength: meta.length,
      contentHash: meta.hash,
    });
  });
}

export function updatePost(
  db: D1Database,
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

    let contentLength = existing.contentLength;
    let contentHash = existing.contentHash;
    let content: string | null = null;

    if (input.content !== undefined) {
      const meta = yield* computeContentMeta(input.content);
      contentLength = meta.length;
      contentHash = meta.hash;
      content = input.content;
    }

    yield* Effect.promise(() =>
      db
        .prepare(
          `UPDATE posts
           SET title = ?, excerpt = ?, status = ?, published_at = ?, updated_at = ?,
             content = COALESCE(?, content), content_length = ?, content_hash = ?
           WHERE slug = ?`,
        )
        .bind(title, excerpt, status, publishedAt, now, content, contentLength, contentHash, slug)
        .run(),
    );

    return new Post({
      ...existing,
      title,
      excerpt,
      status,
      publishedAt,
      updatedAt: now,
      contentLength,
      contentHash,
    });
  });
}

export function deletePost(db: D1Database, slug: string): Effect.Effect<void, PostNotFoundError> {
  return Effect.gen(function* () {
    const existing = yield* Effect.promise(() =>
      db
        .prepare("SELECT slug FROM posts WHERE slug = ? LIMIT 1")
        .bind(slug)
        .first<{ slug: string }>(),
    );

    if (!existing) return yield* Effect.fail(new PostNotFoundError({ slug }));

    yield* Effect.promise(() => db.prepare("DELETE FROM posts WHERE slug = ?").bind(slug).run());
  });
}
