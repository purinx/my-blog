import { Effect } from "effect";
import { Hono } from "hono";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../db", function () {
  return {
    getDb: vi.fn(),
  };
});

vi.mock("../repositories/post-repository", function () {
  return {
    listPublishedPosts: vi.fn(),
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
import { listPublishedPosts } from "../repositories/post-repository";
import { logServerError } from "../utils/error-log";
import { getHomePage } from "./index-controller";

function createApp(): Hono {
  const app = new Hono();
  app.get("/", getHomePage);
  return app;
}

beforeEach(function () {
  vi.clearAllMocks();
  vi.mocked(getDb).mockReturnValue({} as D1Database);
  vi.mocked(listPublishedPosts).mockReturnValue(Effect.succeed([]));
});

afterEach(function () {
  vi.restoreAllMocks();
});

describe("indexController", function () {
  it("GET / renders homepage with posts", async function () {
    vi.mocked(listPublishedPosts).mockReturnValue(
      Effect.succeed([
        {
          id: "post-1",
          slug: "hello-world",
          title: "Hello World",
          excerpt: "Excerpt",
          publishedAt: "2025-01-01T00:00:00.000Z",
        },
      ]),
    );

    const response = await createApp().request("http://localhost/");
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe(
      "public, max-age=60, stale-while-revalidate=300",
    );
    expect(html).toContain("Recent Posts");
    expect(html).toContain("Hello World");
  });

  it("GET / returns 500 page when listPublishedPosts fails", async function () {
    vi.mocked(listPublishedPosts).mockReturnValue(Effect.die(new Error("boom")));

    const response = await createApp().request("http://localhost/");
    const html = await response.text();

    expect(response.status).toBe(500);
    expect(html).toContain("記事の取得に失敗しました。");
    expect(logServerError).toHaveBeenCalledTimes(1);
  });
});
