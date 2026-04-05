import { describe, expect, it } from "vitest";
import { Post, PostNotFoundError, PostSummary, SlugConflictError } from "./index";

describe("post domain models", function () {
  it("creates PostSummary with provided properties", function () {
    const summary = new PostSummary({
      id: "post-1",
      slug: "hello",
      title: "Hello",
      excerpt: "Excerpt",
      publishedAt: "2025-01-01T00:00:00.000Z",
    });

    expect(summary.id).toBe("post-1");
    expect(summary.slug).toBe("hello");
    expect(summary.title).toBe("Hello");
    expect(summary.excerpt).toBe("Excerpt");
    expect(summary.publishedAt).toBe("2025-01-01T00:00:00.000Z");
  });

  it("creates Post with metadata", function () {
    const post = new Post({
      id: "post-1",
      slug: "hello",
      title: "Hello",
      excerpt: "Excerpt",
      status: "published",
      publishedAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z",
      contentLength: 123,
      contentHash: "abc",
    });

    expect(post.status).toBe("published");
    expect(post.contentLength).toBe(123);
    expect(post.contentHash).toBe("abc");
  });

  it("creates tagged PostNotFoundError", function () {
    const error = new PostNotFoundError({ slug: "missing-post" });

    expect(error._tag).toBe("PostNotFoundError");
    expect(error.slug).toBe("missing-post");
  });

  it("creates tagged SlugConflictError", function () {
    const error = new SlugConflictError({ slug: "existing-post" });

    expect(error._tag).toBe("SlugConflictError");
    expect(error.slug).toBe("existing-post");
  });
});
