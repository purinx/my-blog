import { Data, Effect } from "effect";
import { Hono } from "hono";
import * as v from "valibot";
import { ErrorPage } from "../../components/Error";
import { PostBodyEditor } from "../../components/post-body-editor";
import { PostDetail } from "../../components/post-detail";
import { PostNew } from "../../components/post-new";
import type { AppContext, Bindings } from "../../db";
import { getDb } from "../../db";
import { logServerError } from "../utils/error-log";
import {
  createPost,
  deletePost,
  getPostWithContent,
  getPublishedPostWithContent,
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

type PostStatusValue = "draft" | "published";

interface CreatePostRequestBody extends v.InferOutput<typeof CreatePostSchema> {}

interface UpdatePostRequestBody extends v.InferOutput<typeof UpdatePostSchema> {}

interface UpdatePostBodyForm {
  content?: string | File;
  title?: string | File;
}

type UpdatePostBodyInput = Pick<CreatePostRequestBody, "content"> &
  Partial<Pick<CreatePostRequestBody, "title">>;

interface CreateNewPostForm {
  slug?: string | File;
  title?: string | File;
  excerpt?: string | File;
  content?: string | File;
  status?: string | File;
}

interface CreateNewPostValues
  extends Pick<CreatePostRequestBody, "slug" | "title" | "excerpt" | "content"> {
  status: PostStatusValue;
}

class PostsController extends Data.Class<{}> {
  static renderPostNotFound(c: AppContext) {
    return c.html(
      <ErrorPage statusCode={404} description="記事が見つかりませんでした。" showHomeLink />,
      404,
    );
  }

  static renderInternalServerErrorPage(c: AppContext, description: string, cause: unknown) {
    const errorId = logServerError({
      route: c.req.path,
      method: c.req.method,
      statusCode: 500,
      cause,
    });

    return c.html(
      <ErrorPage statusCode={500} description={description} errorId={errorId} showHomeLink />,
      500,
    );
  }

  static renderInternalServerErrorJson(c: AppContext, message: string, cause: unknown) {
    const errorId = logServerError({
      route: c.req.path,
      method: c.req.method,
      statusCode: 500,
      cause,
    });

    return c.json({ error: message, errorId }, 500);
  }

  static getPostPage(c: AppContext) {
    const slug = c.req.param("slug");

    return Effect.runPromise(
      getPublishedPostWithContent(getDb(c), slug).pipe(
        Effect.map(function (result) {
          if (result.etag) {
            c.header("ETag", result.etag);
          } else if (result.post.contentHash) {
            c.header("ETag", result.post.contentHash);
          }

          c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
          return c.html(<PostDetail post={result.post} content={result.content} />);
        }),
        Effect.catchTag("PostNotFoundError", function () {
          return Effect.succeed(PostsController.renderPostNotFound(c));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorPage(c, "記事の取得に失敗しました。", cause),
          );
        }),
      ),
    );
  }

  static getPostBodyEditorPage(c: AppContext) {
    const slug = c.req.param("slug");
    const db = getDb(c);

    return Effect.runPromise(
      Effect.all({
        result: getPostWithContent(db, slug),
        posts: listPosts(db),
      }).pipe(
        Effect.map(function ({ result, posts }) {
          return c.html(
            <PostBodyEditor post={result.post} content={result.content} posts={posts} />,
          );
        }),
        Effect.catchTag("PostNotFoundError", function () {
          return Effect.succeed(PostsController.renderPostNotFound(c));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorPage(
              c,
              "編集画面の表示に失敗しました。",
              cause,
            ),
          );
        }),
      ),
    );
  }

  static async updatePostBody(c: AppContext) {
    const slug = c.req.param("slug");
    const form = (await c.req.parseBody()) as UpdatePostBodyForm;

    if (typeof form.content !== "string") {
      return c.text("Invalid request body", 400);
    }

    if (form.title !== undefined && typeof form.title !== "string") {
      return c.text("Invalid request body", 400);
    }

    const updateInput: UpdatePostBodyInput = { content: form.content };
    if (typeof form.title === "string") {
      const normalizedTitle = form.title.trim();
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
          return Effect.succeed(PostsController.renderPostNotFound(c));
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorPage(c, "本文の更新に失敗しました。", cause),
          );
        }),
      ),
    );
  }

  static getPostsApi(c: AppContext) {
    return Effect.runPromise(
      listPosts(getDb(c)).pipe(
        Effect.map(function (posts) {
          return c.json({ posts });
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorJson(c, "Failed to fetch posts", cause),
          );
        }),
      ),
    );
  }

  static getPostApi(c: AppContext) {
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
            PostsController.renderInternalServerErrorJson(c, "Failed to fetch post", cause),
          );
        }),
      ),
    );
  }

  static async createPostApi(c: AppContext) {
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
            PostsController.renderInternalServerErrorJson(c, "Failed to create post", cause),
          );
        }),
      ),
    );
  }

  static async updatePostApi(c: AppContext) {
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
            PostsController.renderInternalServerErrorJson(c, "Failed to update post", cause),
          );
        }),
      ),
    );
  }

  static deletePostApi(c: AppContext) {
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
            PostsController.renderInternalServerErrorJson(c, "Failed to delete post", cause),
          );
        }),
      ),
    );
  }

  static getPostNewPage(c: AppContext) {
    return Effect.runPromise(
      listPosts(getDb(c)).pipe(
        Effect.map(function (posts) {
          return c.html(<PostNew posts={posts} />);
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorPage(c, "画面の表示に失敗しました。", cause),
          );
        }),
      ),
    );
  }

  static async createNewPost(c: AppContext) {
    const form = (await c.req.parseBody()) as CreateNewPostForm;

    const slug = typeof form.slug === "string" ? form.slug.trim() : "";
    const title = typeof form.title === "string" ? form.title.trim() : "";
    const excerpt = typeof form.excerpt === "string" ? form.excerpt.trim() : "";
    const content = typeof form.content === "string" ? form.content.trim() : "";
    const status: PostStatusValue = form.status === "published" ? "published" : "draft";

    const values: CreateNewPostValues = { slug, title, excerpt, content, status };

    if (!slug || !title || !excerpt || !content) {
      const posts = await Effect.runPromise(listPosts(getDb(c)));
      return c.html(
        <PostNew posts={posts} error="すべての項目を入力してください。" values={values} />,
        422,
      );
    }

    return Effect.runPromise(
      createPost(getDb(c), values).pipe(
        Effect.map(function (post) {
          return c.redirect(`/posts/${post.slug}/edit`, 303);
        }),
        Effect.catchTag("SlugConflictError", function () {
          return listPosts(getDb(c)).pipe(
            Effect.map(function (posts) {
              return c.html(
                <PostNew
                  posts={posts}
                  error={`スラッグ "${slug}" はすでに使われています。`}
                  values={values}
                />,
                409,
              );
            }),
          );
        }),
        Effect.catchAllCause(function (cause) {
          return Effect.succeed(
            PostsController.renderInternalServerErrorPage(c, "記事の作成に失敗しました。", cause),
          );
        }),
      ),
    );
  }
}

const postsController = new Hono<{ Bindings: Bindings }>();

postsController.get("/", PostsController.getPostsApi);
postsController.get("/:slug", PostsController.getPostApi);
postsController.post("/", PostsController.createPostApi);
postsController.put("/:slug", PostsController.updatePostApi);
postsController.delete("/:slug", PostsController.deletePostApi);

export function getPostPage(c: AppContext) {
  return PostsController.getPostPage(c);
}

export function getPostBodyEditorPage(c: AppContext) {
  return PostsController.getPostBodyEditorPage(c);
}

export function updatePostBody(c: AppContext) {
  return PostsController.updatePostBody(c);
}

export function getPostNewPage(c: AppContext) {
  return PostsController.getPostNewPage(c);
}

export function createNewPost(c: AppContext) {
  return PostsController.createNewPost(c);
}

export { postsController };
