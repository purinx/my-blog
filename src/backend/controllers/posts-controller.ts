import { Effect } from "effect";
import { Hono } from "hono";
import * as v from "valibot";
import type { Bindings } from "../../db";
import { getDb } from "../../db";
import {
  createPost,
  deletePost,
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

postsController.get("/", (c) =>
  Effect.runPromise(
    listPosts(getDb(c)).pipe(
      Effect.map((posts) => c.json({ posts })),
      Effect.catchAllCause((cause) => {
        console.error(cause);
        return Effect.succeed(c.json({ error: "Failed to fetch posts" }, 500));
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
        console.error(cause);
        return Effect.succeed(c.json({ error: "Failed to fetch post" }, 500));
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
        console.error(cause);
        return Effect.succeed(c.json({ error: "Failed to create post" }, 500));
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
        console.error(cause);
        return Effect.succeed(c.json({ error: "Failed to update post" }, 500));
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
        console.error(cause);
        return Effect.succeed(c.json({ error: "Failed to delete post" }, 500));
      }),
    ),
  );
});

export { postsController };
