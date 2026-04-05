import { Effect } from "effect";
import { Hono } from "hono";
import { css } from "hono/css";
import { getPostPage, postsController } from "./backend/controllers/posts-controller";
import { listPublishedPosts } from "./backend/repositories/post-repository";
import { logServerError } from "./backend/utils/error-log";
import { requireApiKey } from "./backend/utils/auth";
import { ErrorPage } from "./components/Error";
import { PostCard } from "./features/posts/components/post-card";
import { type AppContext, type Bindings, getDb } from "./db";
import { Layout } from "./ui/layout";

const app = new Hono<{ Bindings: Bindings }>();

app.use("/api/*", async (c, next) => {
  const unauthorized = requireApiKey(c as AppContext);
  if (unauthorized) return unauthorized;
  return next();
});

app.route("/api/posts", postsController);

// ホームページ
app.get("/", (c) => {
  const titleStyle = css`
    margin-bottom: 2rem;
  `;
  return Effect.runPromise(
    listPublishedPosts(getDb(c)).pipe(
      Effect.map((posts) => {
        c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
        return c.html(
          <Layout>
            <h1 class={titleStyle}>Recent Posts</h1>
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

app.get("/posts/:slug", getPostPage);

app.notFound((c) =>
  c.html(
    <ErrorPage
      statusCode={404}
      description="ページが見つかりませんでした。"
      showHomeLink
    />,
    404,
  ),
);

export default app;
