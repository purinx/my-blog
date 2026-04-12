import { Data, Effect } from "effect";
import { ErrorPage } from "../../components/Error";
import { PostBodyEditor } from "../../components/post-body-editor";
import { PostDetail } from "../../components/post-detail";
import { PostNew } from "../../components/post-new";
import type { AppContext } from "../../db";
import { getDb } from "../../db";
import { logServerError } from "../utils/error-log";
import {
  createPost,
  getPostWithContent,
  getPublishedPostWithContent,
  listPosts,
  updatePost,
} from "../repositories/post-repository";

type PostStatusValue = "draft" | "published";

type UpdatePostBodyForm = {
  content?: string | File;
  title?: string | File;
};

type CreateNewPostForm = {
  slug?: string | File;
  title?: string | File;
  excerpt?: string | File;
  content?: string | File;
  status?: string | File;
};

type CreateNewPostValues = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status: PostStatusValue;
};

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
            PostsController.renderInternalServerErrorPage(
              c,
              "記事の取得に失敗しました。",
              cause,
            ),
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

    const updateInput: { content: string; title?: string } = { content: form.content };
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
            PostsController.renderInternalServerErrorPage(
              c,
              "本文の更新に失敗しました。",
              cause,
            ),
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
            PostsController.renderInternalServerErrorPage(
              c,
              "画面の表示に失敗しました。",
              cause,
            ),
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
            PostsController.renderInternalServerErrorPage(
              c,
              "記事の作成に失敗しました。",
              cause,
            ),
          );
        }),
      ),
    );
  }
}

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
