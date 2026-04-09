import { Effect } from "effect";
import { Hono } from "hono";
import {
  createNewPost,
  getPostBodyEditorPage,
  getPostNewPage,
  getPostPage,
  postsController,
  updatePostBody,
} from "./backend/controllers/posts-controller";
import { listPublishedPosts } from "./backend/repositories/post-repository";
import { logServerError } from "./backend/utils/error-log";
import { requireApiKey } from "./backend/utils/auth";
import { ErrorPage } from "./components/Error";
import { PostCard } from "./features/posts/components/post-card";
import { type AppContext, type Bindings, getDb } from "./db";
import { Layout } from "./ui/layout";
import { linkButtonPillStyle } from "./lib/ui/button.css";
import { headerRowStyle, pageTitleStyle } from "./index.css";

const app = new Hono<{ Bindings: Bindings }>();

app.use("/api/*", async (c, next) => {
  const unauthorized = requireApiKey(c as AppContext);
  if (unauthorized) return unauthorized;
  return next();
});

app.route("/api/posts", postsController);

// ホームページ
app.get("/", (c) => {
  return Effect.runPromise(
    listPublishedPosts(getDb(c)).pipe(
      Effect.map((posts) => {
        c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
        return c.html(
          <Layout>
            <div class={headerRowStyle}>
              <h1 class={pageTitleStyle}>Recent Posts</h1>
              <a href="/posts/new" class={linkButtonPillStyle}>+ 新規作成</a>
            </div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Layout>,
        );
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
});

app.get("/posts/new", getPostNewPage);
app.post("/posts/new", createNewPost);
app.get("/posts/:slug", getPostPage);
app.get("/posts/:slug/edit", getPostBodyEditorPage);
app.post("/posts/:slug/edit", updatePostBody);

app.notFound((c) =>
  c.html(
    <ErrorPage statusCode={404} description="ページが見つかりませんでした。" showHomeLink />,
    404,
  ),
);

export default app;
