import { Effect } from "effect";
import { Hono } from "hono";
import { logger } from "hono/logger";
import {
  createNewPost,
  getPostBodyEditorPage,
  getPostNewPage,
  getPostPage,
  postsController,
  updatePostBody,
} from "./backend/controllers/posts-controller";
import { listPublishedPosts } from "./backend/repositories/post-repository";
import { requireApiKey } from "./backend/utils/auth";
import { logServerError } from "./backend/utils/error-log";
import { ErrorPage } from "./components/Error";
import { PostCard } from "./features/posts/components/post-card";
import { type AppContext, type Bindings, getDb } from "./db";
import { linkButtonPillStyle } from "./lib/ui/button.css";
import { headerRowStyle, pageTitleStyle } from "./index.css";
import { Layout } from "./ui/layout";

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());
app.use("/api/*", async function (c, next) {
  const unauthorized = requireApiKey(c as AppContext);
  if (unauthorized) {
    return unauthorized;
  }

  return next();
});

app.route("/api/posts", postsController);

// ホームページ
app.get("/", function (c) {
  return Effect.runPromise(
    listPublishedPosts(getDb(c)).pipe(
      Effect.map(function (posts) {
        c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
        return c.html(
          <Layout>
            <div class={headerRowStyle}>
              <h1 class={pageTitleStyle}>Recent Posts</h1>
              <a href="/posts/new" class={linkButtonPillStyle}>
                <span data-role="button-content">
                  <span data-role="button-icon" aria-hidden="true" />
                  新規作成
                </span>
              </a>
            </div>
            {posts.map(function (post) {
              return <PostCard key={post.id} post={post} />;
            })}
          </Layout>,
        );
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
});

app.get("/posts/new", getPostNewPage);
app.post("/posts/new", createNewPost);
app.get("/posts/:slug", getPostPage);
app.get("/posts/:slug/edit", getPostBodyEditorPage);
app.post("/posts/:slug/edit", updatePostBody);

app.notFound(function (c) {
  return c.html(
    <ErrorPage statusCode={404} description="ページが見つかりませんでした。" showHomeLink />,
    404,
  );
});

export default app;
