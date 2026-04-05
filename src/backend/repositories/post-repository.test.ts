import { Effect } from "effect";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  createPost,
  deletePost,
  getPostWithContent,
  getPublishedPostWithContent,
  listPosts,
  listPublishedPosts,
  updatePost,
} from "./post-repository";

type MockPostRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: string;
  published_at: string;
  updated_at: string;
  content: string;
  content_length: number | null;
  content_hash: string | null;
};

function normalizeSql(sql: string): string {
  return sql.replace(/\s+/g, " ").trim().toLowerCase();
}

function cloneRecord(record: MockPostRecord): MockPostRecord {
  return {
    ...record,
  };
}

function createMockPostRecord(overrides: Partial<MockPostRecord> = {}): MockPostRecord {
  return {
    id: "post-1",
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Hello excerpt",
    status: "published",
    published_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
    content: "Hello content",
    content_length: 13,
    content_hash: "hash-hello-content",
    ...overrides,
  };
}

async function computeSha256Hex(content: string): Promise<string> {
  const bytes = new TextEncoder().encode(content);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map(function (value) {
      return value.toString(16).padStart(2, "0");
    })
    .join("");
}

function createPreparedStatement(
  database: MockD1DatabaseImpl,
  normalizedSql: string,
): D1PreparedStatement {
  const state = { args: [] as unknown[] };

  return {
    bind: function (...args: unknown[]) {
      state.args = args;
      return this;
    },
    first: function <T>() {
      return database.executeFirst<T>(normalizedSql, state.args);
    },
    all: function <T>() {
      return database.executeAll<T>(normalizedSql, state.args);
    },
    run: function () {
      return database.executeRun(normalizedSql, state.args);
    },
  } as unknown as D1PreparedStatement;
}

class MockD1DatabaseImpl {
  private rows: MockPostRecord[];

  constructor(initialRows: MockPostRecord[] = []) {
    this.rows = initialRows.map(cloneRecord);
  }

  prepare(sql: string): D1PreparedStatement {
    return createPreparedStatement(this, normalizeSql(sql));
  }

  getRowBySlug(slug: string): MockPostRecord | undefined {
    return this.rows.find(function (row) {
      return row.slug === slug;
    });
  }

  async executeFirst<T>(sql: string, args: unknown[]): Promise<T | null> {
    if (sql === "select slug from posts where slug = ? limit 1") {
      const row = this.findRowBySlugArg(args);
      return (row ? { slug: row.slug } : null) as T | null;
    }

    if (sql.includes("from posts where slug = ? and status = 'published'")) {
      const row = this.findRowBySlugArg(args);
      if (!row || row.status !== "published") return null;
      return this.buildSelectRow<T>(sql, row);
    }

    if (sql.includes("from posts where slug = ? limit 1")) {
      const row = this.findRowBySlugArg(args);
      if (!row) return null;
      return this.buildSelectRow<T>(sql, row);
    }

    throw new Error(`Unsupported first() SQL: ${sql}`);
  }

  async executeAll<T>(sql: string, _args: unknown[]): Promise<D1Result<T>> {
    if (
      sql.includes("from posts") &&
      sql.includes("where status = 'published'") &&
      sql.includes("order by published_at desc")
    ) {
      const records = this.rows
        .filter(function (row) {
          return row.status === "published";
        })
        .sort(function (a, b) {
          return b.published_at.localeCompare(a.published_at);
        })
        .map(function (row) {
          return {
            id: row.id,
            slug: row.slug,
            title: row.title,
            excerpt: row.excerpt,
            publishedAt: row.published_at,
          };
        });

      return { results: records } as unknown as D1Result<T>;
    }

    if (sql.includes("from posts") && sql.includes("order by published_at desc")) {
      const records = this.rows
        .slice()
        .sort(function (a, b) {
          return b.published_at.localeCompare(a.published_at);
        })
        .map(function (row) {
          return {
            id: row.id,
            slug: row.slug,
            title: row.title,
            excerpt: row.excerpt,
            status: row.status,
            publishedAt: row.published_at,
            updatedAt: row.updated_at,
            contentLength: row.content_length,
            contentHash: row.content_hash,
          };
        });

      return { results: records } as unknown as D1Result<T>;
    }

    throw new Error(`Unsupported all() SQL: ${sql}`);
  }

  async executeRun(sql: string, args: unknown[]): Promise<D1Result<Record<string, never>>> {
    if (sql.startsWith("insert into posts")) {
      this.rows.push({
        id: args[0] as string,
        slug: args[1] as string,
        title: args[2] as string,
        excerpt: args[3] as string,
        published_at: args[4] as string,
        updated_at: args[5] as string,
        status: args[6] as string,
        content: args[7] as string,
        content_length: args[8] as number | null,
        content_hash: args[9] as string | null,
      });
      return { results: [] } as unknown as D1Result<Record<string, never>>;
    }

    if (sql.startsWith("update posts")) {
      const slug = args[8] as string;
      const row = this.getRowBySlug(slug);
      if (!row) {
        return { results: [] } as unknown as D1Result<Record<string, never>>;
      }

      row.title = args[0] as string;
      row.excerpt = args[1] as string;
      row.status = args[2] as string;
      row.published_at = args[3] as string;
      row.updated_at = args[4] as string;
      row.content_length = args[6] as number | null;
      row.content_hash = args[7] as string | null;

      const content = args[5];
      if (typeof content === "string") {
        row.content = content;
      }

      return { results: [] } as unknown as D1Result<Record<string, never>>;
    }

    if (sql.startsWith("delete from posts where slug = ?")) {
      const slug = args[0] as string;
      this.rows = this.rows.filter(function (row) {
        return row.slug !== slug;
      });
      return { results: [] } as unknown as D1Result<Record<string, never>>;
    }

    throw new Error(`Unsupported run() SQL: ${sql}`);
  }

  private findRowBySlugArg(args: unknown[]): MockPostRecord | undefined {
    const slug = args[0] as string;
    return this.getRowBySlug(slug);
  }

  private buildSelectRow<T>(sql: string, row: MockPostRecord): T {
    const base = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      status: row.status,
      publishedAt: row.published_at,
      updatedAt: row.updated_at,
      contentLength: row.content_length,
      contentHash: row.content_hash,
    };

    if (sql.includes("content, content_length as contentlength")) {
      return {
        ...base,
        content: row.content,
      } as T;
    }

    return base as T;
  }
}

function createMockDatabase(initialRows: MockPostRecord[] = []): MockD1DatabaseImpl {
  return new MockD1DatabaseImpl(initialRows);
}

async function runFailure<E>(effect: Effect.Effect<unknown, E>): Promise<E | null> {
  return Effect.runPromise(
    effect.pipe(
      Effect.match({
        onFailure: function (error) {
          return error;
        },
        onSuccess: function () {
          return null;
        },
      }),
    ),
  );
}

afterEach(function () {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("post-repository", function () {
  it("listPublishedPosts returns only published posts in descending order", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        id: "post-1",
        slug: "post-1",
        status: "draft",
        published_at: "2025-01-03T00:00:00.000Z",
      }),
      createMockPostRecord({
        id: "post-2",
        slug: "post-2",
        status: "published",
        published_at: "2025-01-02T00:00:00.000Z",
      }),
      createMockPostRecord({
        id: "post-3",
        slug: "post-3",
        status: "published",
        published_at: "2025-01-04T00:00:00.000Z",
      }),
    ]);

    const posts = await Effect.runPromise(listPublishedPosts(db as unknown as D1Database));

    expect(posts.map(function (post) {
      return post.slug;
    })).toEqual(["post-3", "post-2"]);
  });

  it("listPosts returns all posts and normalizes status fallback to published", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "post-1",
        status: "draft",
        published_at: "2025-01-01T00:00:00.000Z",
      }),
      createMockPostRecord({
        slug: "post-2",
        status: "archived",
        published_at: "2025-01-02T00:00:00.000Z",
      }),
    ]);

    const posts = await Effect.runPromise(listPosts(db as unknown as D1Database));

    expect(posts.map(function (post) {
      return post.slug;
    })).toEqual(["post-2", "post-1"]);
    expect(posts[0]?.status).toBe("published");
    expect(posts[1]?.status).toBe("draft");
  });

  it("getPublishedPostWithContent returns post and content", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "published-post",
        status: "published",
        content: "Published content",
        content_hash: "etag-123",
      }),
    ]);

    const result = await Effect.runPromise(
      getPublishedPostWithContent(db as unknown as D1Database, "published-post"),
    );

    expect(result.post.slug).toBe("published-post");
    expect(result.content).toBe("Published content");
    expect(result.etag).toBe("etag-123");
  });

  it("getPublishedPostWithContent fails when post is missing or draft", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "draft-post",
        status: "draft",
      }),
    ]);

    const failure = await runFailure(
      getPublishedPostWithContent(db as unknown as D1Database, "draft-post"),
    );

    expect(failure).toMatchObject({
      _tag: "PostNotFoundError",
      slug: "draft-post",
    });
  });

  it("getPostWithContent returns draft posts as well", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "draft-post",
        status: "draft",
        content: "Draft content",
      }),
    ]);

    const result = await Effect.runPromise(
      getPostWithContent(db as unknown as D1Database, "draft-post"),
    );

    expect(result.post.status).toBe("draft");
    expect(result.content).toBe("Draft content");
  });

  it("createPost fails on slug conflict", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "existing-post",
      }),
    ]);

    const failure = await runFailure(
      createPost(db as unknown as D1Database, {
        slug: "existing-post",
        title: "Title",
        excerpt: "Excerpt",
        content: "Content",
      }),
    );

    expect(failure).toMatchObject({
      _tag: "SlugConflictError",
      slug: "existing-post",
    });
  });

  it("createPost inserts row and computes content metadata", async function () {
    const db = createMockDatabase();
    const now = new Date("2025-02-03T04:05:06.000Z");

    vi.useFakeTimers();
    vi.setSystemTime(now);
    vi.spyOn(crypto, "randomUUID").mockReturnValue("00000000-0000-0000-0000-000000000000");

    const created = await Effect.runPromise(
      createPost(db as unknown as D1Database, {
        slug: "new-post",
        title: "New Title",
        excerpt: "New Excerpt",
        content: "Hello Vitest",
      }),
    );

    const inserted = db.getRowBySlug("new-post");
    const expectedHash = await computeSha256Hex("Hello Vitest");

    expect(created.id).toBe("00000000-0000-0000-0000-000000000000");
    expect(created.status).toBe("published");
    expect(created.publishedAt).toBe("2025-02-03T04:05:06.000Z");
    expect(created.updatedAt).toBe("2025-02-03T04:05:06.000Z");
    expect(created.contentLength).toBe(12);
    expect(created.contentHash).toBe(expectedHash);
    expect(inserted?.content).toBe("Hello Vitest");
    expect(inserted?.content_hash).toBe(expectedHash);
  });

  it("updatePost fails when target post does not exist", async function () {
    const db = createMockDatabase();

    const failure = await runFailure(
      updatePost(db as unknown as D1Database, "missing-post", {
        title: "Updated",
      }),
    );

    expect(failure).toMatchObject({
      _tag: "PostNotFoundError",
      slug: "missing-post",
    });
  });

  it("updatePost updates partial fields while preserving content when content is omitted", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "target-post",
        title: "Old Title",
        excerpt: "Old Excerpt",
        content: "Old Content",
        content_length: 11,
        content_hash: "old-hash",
      }),
    ]);

    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-03-01T00:00:00.000Z"));

    const updated = await Effect.runPromise(
      updatePost(db as unknown as D1Database, "target-post", {
        title: "New Title",
        status: "draft",
      }),
    );

    const row = db.getRowBySlug("target-post");
    expect(updated.title).toBe("New Title");
    expect(updated.status).toBe("draft");
    expect(updated.updatedAt).toBe("2025-03-01T00:00:00.000Z");
    expect(row?.content).toBe("Old Content");
    expect(row?.content_length).toBe(11);
    expect(row?.content_hash).toBe("old-hash");
  });

  it("updatePost recalculates content metadata when content is provided", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "target-post",
        content: "Old",
        content_length: 3,
        content_hash: "old-hash",
      }),
    ]);

    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-03-02T00:00:00.000Z"));

    const updated = await Effect.runPromise(
      updatePost(db as unknown as D1Database, "target-post", {
        content: "Updated content value",
      }),
    );

    const row = db.getRowBySlug("target-post");
    const expectedHash = await computeSha256Hex("Updated content value");

    expect(updated.updatedAt).toBe("2025-03-02T00:00:00.000Z");
    expect(updated.contentLength).toBe(21);
    expect(updated.contentHash).toBe(expectedHash);
    expect(row?.content).toBe("Updated content value");
    expect(row?.content_length).toBe(21);
    expect(row?.content_hash).toBe(expectedHash);
  });

  it("deletePost removes post by slug", async function () {
    const db = createMockDatabase([
      createMockPostRecord({
        slug: "delete-me",
      }),
    ]);

    await Effect.runPromise(deletePost(db as unknown as D1Database, "delete-me"));

    expect(db.getRowBySlug("delete-me")).toBeUndefined();
  });

  it("deletePost fails when post does not exist", async function () {
    const db = createMockDatabase();

    const failure = await runFailure(deletePost(db as unknown as D1Database, "missing-post"));

    expect(failure).toMatchObject({
      _tag: "PostNotFoundError",
      slug: "missing-post",
    });
  });
});
