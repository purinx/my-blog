import { Effect } from "effect";
import { Hono } from "hono";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PostNotFoundError, SlugConflictError } from "../domain/post";

vi.mock("../../db", function () {
  return {
    getDb: vi.fn(),
  };
});

vi.mock("../repositories/post-repository", function () {
  return {
    listPosts: vi.fn(),
    getPostWithContent: vi.fn(),
    getPublishedPostWithContent: vi.fn(),
    createPost: vi.fn(),
    updatePost: vi.fn(),
    deletePost: vi.fn(),
  };
});

vi.mock("../utils/error-log", function () {
  return {
    logServerError: vi.fn(function () {
      return "deadbeef";
    }),
  };
});

import { getDb } from "../../db";
import {
  createPost,
  deletePost,
  getPublishedPostWithContent,
  getPostWithContent,
  listPosts,
  updatePost,
} from "../repositories/post-repository";
import { logServerError } from "../utils/error-log";
import { getPostPage, postsController } from "./posts-controller";

function createApp(): Hono {
  const app = new Hono();
  app.route("/posts", postsController);
  return app;
}

function createPageApp(): Hono {
  const app = new Hono();
  app.get("/posts/:slug", getPostPage);
  return app;
}

async function parseJson(response: Response): Promise<unknown> {
  return response.json();
}

beforeEach(function () {
  vi.clearAllMocks();
  vi.mocked(getDb).mockReturnValue({} as D1Database);
});

afterEach(function () {
  vi.restoreAllMocks();
});

describe("postsController", function () {
  it("GET / returns posts", async function () {
    vi.mocked(listPosts).mockReturnValue(
      Effect.succeed([
        {
          id: "post-1",
          slug: "hello",
          title: "Hello",
          excerpt: "Excerpt",
          status: "published",
          publishedAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          contentLength: 10,
          contentHash: "hash",
        },
      ]),
    );

    const response = await createApp().request("http://localhost/posts");

    expect(response.status).toBe(200);
    expect(await parseJson(response)).toEqual({
      posts: [
        {
          id: "post-1",
          slug: "hello",
          title: "Hello",
          excerpt: "Excerpt",
          status: "published",
          publishedAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          contentLength: 10,
          contentHash: "hash",
        },
      ],
    });
  });

  it("GET / returns 500 when listPosts fails", async function () {
    vi.mocked(listPosts).mockReturnValue(Effect.die(new Error("boom")));

    const response = await createApp().request("http://localhost/posts");

    expect(response.status).toBe(500);
    expect(await parseJson(response)).toEqual({ error: "Failed to fetch posts", errorId: "deadbeef" });
    expect(logServerError).toHaveBeenCalledTimes(1);
  });

  it("GET /:slug returns post with content", async function () {
    vi.mocked(getPostWithContent).mockReturnValue(
      Effect.succeed({
        post: {
          id: "post-1",
          slug: "hello",
          title: "Hello",
          excerpt: "Excerpt",
          status: "published",
          publishedAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          contentLength: 12,
          contentHash: "etag",
        },
        content: "post content",
        etag: "etag",
      }),
    );

    const response = await createApp().request("http://localhost/posts/hello");

    expect(response.status).toBe(200);
    expect(await parseJson(response)).toEqual({
      post: {
        id: "post-1",
        slug: "hello",
        title: "Hello",
        excerpt: "Excerpt",
        status: "published",
        publishedAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        contentLength: 12,
        contentHash: "etag",
        content: "post content",
      },
    });
  });

  it("GET /:slug returns 404 when post is not found", async function () {
    vi.mocked(getPostWithContent).mockReturnValue(
      Effect.fail(new PostNotFoundError({ slug: "missing" })),
    );

    const response = await createApp().request("http://localhost/posts/missing");

    expect(response.status).toBe(404);
    expect(await parseJson(response)).toEqual({ error: "Post not found" });
  });

  it("POST / returns 400 for invalid JSON body", async function () {
    const response = await createApp().request("http://localhost/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: "{invalid-json",
    });

    expect(response.status).toBe(400);
    expect(await parseJson(response)).toMatchObject({ error: "Invalid request body" });
    expect(createPost).not.toHaveBeenCalled();
  });

  it("POST / returns 201 on success", async function () {
    vi.mocked(createPost).mockReturnValue(
      Effect.succeed({
        id: "post-1",
        slug: "hello",
        title: "Hello",
        excerpt: "Excerpt",
        status: "published",
        publishedAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        contentLength: 12,
        contentHash: "hash",
      }),
    );

    const response = await createApp().request("http://localhost/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        slug: "hello",
        title: "Hello",
        excerpt: "Excerpt",
        content: "Post body",
      }),
    });

    expect(response.status).toBe(201);
    expect(await parseJson(response)).toEqual({
      post: {
        id: "post-1",
        slug: "hello",
        title: "Hello",
        excerpt: "Excerpt",
        status: "published",
        publishedAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        contentLength: 12,
        contentHash: "hash",
      },
    });
    expect(createPost).toHaveBeenCalledTimes(1);
  });

  it("POST / returns 409 on slug conflict", async function () {
    vi.mocked(createPost).mockReturnValue(
      Effect.fail(new SlugConflictError({ slug: "hello" })),
    );

    const response = await createApp().request("http://localhost/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        slug: "hello",
        title: "Hello",
        excerpt: "Excerpt",
        content: "Post body",
      }),
    });

    expect(response.status).toBe(409);
    expect(await parseJson(response)).toEqual({ error: "Slug already exists" });
  });

  it("PUT /:slug returns 400 for invalid request body", async function () {
    const response = await createApp().request("http://localhost/posts/hello", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: "invalid-status",
      }),
    });

    expect(response.status).toBe(400);
    expect(await parseJson(response)).toMatchObject({ error: "Invalid request body" });
    expect(updatePost).not.toHaveBeenCalled();
  });

  it("PUT /:slug returns 200 on success", async function () {
    vi.mocked(updatePost).mockReturnValue(
      Effect.succeed({
        id: "post-1",
        slug: "hello",
        title: "Updated title",
        excerpt: "Updated excerpt",
        status: "draft",
        publishedAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-02T00:00:00.000Z",
        contentLength: 12,
        contentHash: "hash",
      }),
    );

    const response = await createApp().request("http://localhost/posts/hello", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: "Updated title",
        status: "draft",
      }),
    });

    expect(response.status).toBe(200);
    expect(await parseJson(response)).toEqual({
      post: {
        id: "post-1",
        slug: "hello",
        title: "Updated title",
        excerpt: "Updated excerpt",
        status: "draft",
        publishedAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-02T00:00:00.000Z",
        contentLength: 12,
        contentHash: "hash",
      },
    });
  });

  it("PUT /:slug returns 404 when target is missing", async function () {
    vi.mocked(updatePost).mockReturnValue(
      Effect.fail(new PostNotFoundError({ slug: "missing" })),
    );

    const response = await createApp().request("http://localhost/posts/missing", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: "Updated title",
      }),
    });

    expect(response.status).toBe(404);
    expect(await parseJson(response)).toEqual({ error: "Post not found" });
  });

  it("DELETE /:slug returns deleted=true on success", async function () {
    vi.mocked(deletePost).mockReturnValue(Effect.succeed(undefined));

    const response = await createApp().request("http://localhost/posts/hello", {
      method: "DELETE",
    });

    expect(response.status).toBe(200);
    expect(await parseJson(response)).toEqual({ deleted: true });
  });

  it("DELETE /:slug returns 404 when target is missing", async function () {
    vi.mocked(deletePost).mockReturnValue(
      Effect.fail(new PostNotFoundError({ slug: "missing" })),
    );

    const response = await createApp().request("http://localhost/posts/missing", {
      method: "DELETE",
    });

    expect(response.status).toBe(404);
    expect(await parseJson(response)).toEqual({ error: "Post not found" });
  });
});

describe("getPostPage", function () {
  it("returns rendered post page with cache headers", async function () {
    vi.mocked(getPublishedPostWithContent).mockReturnValue(
      Effect.succeed({
        post: {
          id: "post-1",
          slug: "hello",
          title: "Hello",
          excerpt: "Excerpt",
          status: "published",
          publishedAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          contentLength: 12,
          contentHash: "post-hash",
        },
        content: "# hello",
        etag: "etag-value",
      }),
    );

    const response = await createPageApp().request("http://localhost/posts/hello");
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("etag")).toBe("etag-value");
    expect(response.headers.get("cache-control")).toBe(
      "public, max-age=60, stale-while-revalidate=300",
    );
    expect(body).toContain("id=\"post-wrapper\"");
  });

  it("falls back to post.contentHash when etag is null", async function () {
    vi.mocked(getPublishedPostWithContent).mockReturnValue(
      Effect.succeed({
        post: {
          id: "post-1",
          slug: "hello",
          title: "Hello",
          excerpt: "Excerpt",
          status: "published",
          publishedAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          contentLength: 12,
          contentHash: "post-hash",
        },
        content: "# hello",
        etag: null,
      }),
    );

    const response = await createPageApp().request("http://localhost/posts/hello");

    expect(response.status).toBe(200);
    expect(response.headers.get("etag")).toBe("post-hash");
  });

  it("returns 404 page when post is not found", async function () {
    vi.mocked(getPublishedPostWithContent).mockReturnValue(
      Effect.fail(new PostNotFoundError({ slug: "missing" })),
    );

    const response = await createPageApp().request("http://localhost/posts/missing");
    const body = await response.text();

    expect(response.status).toBe(404);
    expect(body).toContain("404 - Not Found");
  });

  it("returns 500 page when repository throws unexpected error", async function () {
    vi.mocked(getPublishedPostWithContent).mockReturnValue(Effect.die(new Error("boom")));

    const response = await createPageApp().request("http://localhost/posts/hello");
    const body = await response.text();

    expect(response.status).toBe(500);
    expect(body).toContain("500 - Internal Server Error");
    expect(body).toContain("Error ID: deadbeef");
    expect(logServerError).toHaveBeenCalledTimes(1);
  });
});
