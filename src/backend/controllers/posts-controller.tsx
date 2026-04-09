import { Effect } from "effect";
import { Hono } from "hono";
import * as v from "valibot";
import { ErrorPage } from "../../components/Error";
import { PostBodyEditor } from "../../components/post-body-editor";
import { PostDetail } from "../../components/post-detail";
import type { AppContext, Bindings } from "../../db";
import { getDb } from "../../db";
import { logServerError } from "../utils/error-log";
import {
  createPost,
  deletePost,
  getPublishedPostWithContent,
  getPostWithContent,
  listPosts,
  updatePost,
} from "../repositories/post-repository";

const NonEmptyString = v.pipe(v.string(), v.minLength(1));
const PostStatus = v.picklist(["draft", "published"]);

const CreatePostSchema = v.object({
  slug: NonEmptyString,
  title: NonEmptyString,
  excerpt: NonEmptyString,
  content: NonEmptyString,
  status: v.optional(PostStatus),
  publishedAt: v.optional(NonEmptyString),
});

const UpdatePostSchema = v.object({
  title: v.optional(NonEmptyString),
  excerpt: v.optional(NonEmptyString),
  content: v.optional(NonEmptyString),
  status: v.optional(PostStatus),
  publishedAt: v.optional(NonEmptyString),
});

const postsController = new Hono<{ Bindings: Bindings }>();

function renderPostNotFound(c: AppContext) {
  return c.html(
    <ErrorPage statusCode={404} description="記事が見つかりませんでした。" showHomeLink />,
    404,
  );
}

export function getPostPage(c: AppContext) {
  const slug = c.req.param("slug");
  return Effect.runPromise(
    getPublishedPostWithContent(getDb(c), slug).pipe(
      Effect.map((result) => {
        if (result.etag) {
          c.header("ETag", result.etag);
        } else if (result.post.contentHash) {
          c.header("ETag", result.post.contentHash);
        }
        c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
        return c.html(<PostDetail post={result.post} content={result.content} />);
      }),
      Effect.catchTag("PostNotFoundError", function () {
        return Effect.succeed(renderPostNotFound(c));
      }),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(
          c.html(
            <ErrorPage
              statusCode={500}
              description="記事の取得に失敗しました。"
              errorId={errorId}
              showHomeLink
            />,
            500,
          ),
        );
      }),
    ),
  );
}

export function getPostBodyEditorPage(c: AppContext) {
  const slug = c.req.param("slug");
  const saved = c.req.query("saved") === "1";
  return Effect.runPromise(
    getPostWithContent(getDb(c), slug).pipe(
      Effect.map(function (result) {
        return c.html(<PostBodyEditor post={result.post} content={result.content} saved={saved} />);
      }),
      Effect.catchTag("PostNotFoundError", function () {
        return Effect.succeed(renderPostNotFound(c));
      }),
      Effect.catchAllCause(function (cause) {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(
          c.html(
            <ErrorPage
              statusCode={500}
              description="編集画面の表示に失敗しました。"
              errorId={errorId}
              showHomeLink
            />,
            500,
          ),
        );
      }),
    ),
  );
}

export async function updatePostBody(c: AppContext) {
  const slug = c.req.param("slug");
  const form = await c.req.parseBody();
  const content = form.content;
  const title = form.title;

  if (typeof content !== "string") {
    return c.text("Invalid request body", 400);
  }

  if (title !== undefined && typeof title !== "string") {
    return c.text("Invalid request body", 400);
  }

  const updateInput: { content: string; title?: string } = { content };
  if (typeof title === "string") {
    const normalizedTitle = title.trim();
    if (!normalizedTitle) {
      return c.text("Invalid title", 400);
    }
    updateInput.title = normalizedTitle;
  }

  return Effect.runPromise(
    updatePost(getDb(c), slug, updateInput).pipe(
      Effect.map(function () {
        return c.redirect(`/posts/${slug}/edit?saved=1`, 303);
      }),
      Effect.catchTag("PostNotFoundError", function () {
        return Effect.succeed(renderPostNotFound(c));
      }),
      Effect.catchAllCause(function (cause) {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(
          c.html(
            <ErrorPage
              statusCode={500}
              description="本文の更新に失敗しました。"
              errorId={errorId}
              showHomeLink
            />,
            500,
          ),
        );
      }),
    ),
  );
}

postsController.get("/", (c) =>
  Effect.runPromise(
    listPosts(getDb(c)).pipe(
      Effect.map((posts) => c.json({ posts })),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.json({ error: "Failed to fetch posts", errorId }, 500));
      }),
    ),
  ),
);

postsController.get("/:slug", (c) => {
  const slug = c.req.param("slug");
  return Effect.runPromise(
    getPostWithContent(getDb(c), slug).pipe(
      Effect.map((result) => c.json({ post: { ...result.post, content: result.content } })),
      Effect.catchTag("PostNotFoundError", () =>
        Effect.succeed(c.json({ error: "Post not found" }, 404)),
      ),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.json({ error: "Failed to fetch post", errorId }, 500));
      }),
    ),
  );
});

postsController.post("/", async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = v.safeParse(CreatePostSchema, body);
  if (!parsed.success) {
    return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
  }

  const { slug, title, excerpt, content, status, publishedAt } = parsed.output;

  return Effect.runPromise(
    createPost(getDb(c), {
      slug,
      title,
      excerpt,
      content,
      status,
      publishedAt,
    }).pipe(
      Effect.map((post) => c.json({ post }, 201)),
      Effect.catchTag("SlugConflictError", () =>
        Effect.succeed(c.json({ error: "Slug already exists" }, 409)),
      ),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.json({ error: "Failed to create post", errorId }, 500));
      }),
    ),
  );
});

postsController.put("/:slug", async (c) => {
  const slug = c.req.param("slug");
  const body = await c.req.json().catch(() => null);
  const parsed = v.safeParse(UpdatePostSchema, body);
  if (!parsed.success) {
    return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
  }

  return Effect.runPromise(
    updatePost(getDb(c), slug, parsed.output).pipe(
      Effect.map((post) => c.json({ post })),
      Effect.catchTag("PostNotFoundError", () =>
        Effect.succeed(c.json({ error: "Post not found" }, 404)),
      ),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.json({ error: "Failed to update post", errorId }, 500));
      }),
    ),
  );
});

postsController.delete("/:slug", (c) => {
  const slug = c.req.param("slug");
  return Effect.runPromise(
    deletePost(getDb(c), slug).pipe(
      Effect.map(() => c.json({ deleted: true })),
      Effect.catchTag("PostNotFoundError", () =>
        Effect.succeed(c.json({ error: "Post not found" }, 404)),
      ),
      Effect.catchAllCause((cause) => {
        const errorId = logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.json({ error: "Failed to delete post", errorId }, 500));
      }),
    ),
  );
});

export { postsController };
