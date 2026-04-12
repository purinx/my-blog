import { Data, Effect } from "effect";
import { Hono } from "hono";
import * as v from "valibot";
import type { AppContext, Bindings } from "../../../db";
import { getDb } from "../../../db";
import { logServerError } from "../../utils/error-log";
import {
  createPost,
  deletePost,
  getPostWithContent,
  listPosts,
  updatePost,
} from "../../repositories/post-repository";

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

type CreatePostRequestBody = v.InferOutput<typeof CreatePostSchema>;

type UpdatePostRequestBody = v.InferOutput<typeof UpdatePostSchema>;

class PostApiController extends Data.Class<{}> {
  static renderInternalServerErrorJson(c: AppContext, message: string, cause: unknown) {
    const errorId = logServerError({
      route: c.req.path,
      method: c.req.method,
      statusCode: 500,
      cause,
    });

    return c.json({ error: message, errorId }, 500);
  }

  static getPosts(c: AppContext) {
    return Effect.runPromise(
      listPosts(getDb(c)).pipe(
        Effect.map(function (posts) {
          return c.json({ posts });
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostApiController.renderInternalServerErrorJson(c, "Failed to fetch posts", cause),
          );
        }),
      ),
    );
  }

  static getPost(c: AppContext) {
    const slug = c.req.param("slug");

    return Effect.runPromise(
      getPostWithContent(getDb(c), slug).pipe(
        Effect.map(function (result) {
          return c.json({ post: { ...result.post, content: result.content } });
        }),
        Effect.catchTag("PostNotFoundError", function () {
          return Effect.succeed(c.json({ error: "Post not found" }, 404));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostApiController.renderInternalServerErrorJson(c, "Failed to fetch post", cause),
          );
        }),
      ),
    );
  }

  static async createPost(c: AppContext) {
    const body = await c.req.json().catch(function () {
      return null;
    });
    const parsed = v.safeParse(CreatePostSchema, body);
    if (!parsed.success) {
      return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
    }

    const payload: CreatePostRequestBody = parsed.output;

    return Effect.runPromise(
      createPost(getDb(c), payload).pipe(
        Effect.map(function (post) {
          return c.json({ post }, 201);
        }),
        Effect.catchTag("SlugConflictError", function () {
          return Effect.succeed(c.json({ error: "Slug already exists" }, 409));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostApiController.renderInternalServerErrorJson(c, "Failed to create post", cause),
          );
        }),
      ),
    );
  }

  static async updatePost(c: AppContext) {
    const slug = c.req.param("slug");
    const body = await c.req.json().catch(function () {
      return null;
    });
    const parsed = v.safeParse(UpdatePostSchema, body);
    if (!parsed.success) {
      return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
    }

    const payload: UpdatePostRequestBody = parsed.output;

    return Effect.runPromise(
      updatePost(getDb(c), slug, payload).pipe(
        Effect.map(function (post) {
          return c.json({ post });
        }),
        Effect.catchTag("PostNotFoundError", function () {
          return Effect.succeed(c.json({ error: "Post not found" }, 404));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostApiController.renderInternalServerErrorJson(c, "Failed to update post", cause),
          );
        }),
      ),
    );
  }

  static deletePost(c: AppContext) {
    const slug = c.req.param("slug");

    return Effect.runPromise(
      deletePost(getDb(c), slug).pipe(
        Effect.map(function () {
          return c.json({ deleted: true });
        }),
        Effect.catchTag("PostNotFoundError", function () {
          return Effect.succeed(c.json({ error: "Post not found" }, 404));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostApiController.renderInternalServerErrorJson(c, "Failed to delete post", cause),
          );
        }),
      ),
    );
  }
}

const postsApiController = new Hono<{ Bindings: Bindings }>();

postsApiController.get("/", PostApiController.getPosts);
postsApiController.get("/:slug", PostApiController.getPost);
postsApiController.post("/", PostApiController.createPost);
postsApiController.put("/:slug", PostApiController.updatePost);
postsApiController.delete("/:slug", PostApiController.deletePost);

export { postsApiController };
