import { Effect } from "effect";
import { Hono } from "hono";
import { css } from "hono/css";
import { postsController } from "./backend/controllers/posts-controller";
import {
  getPublishedPostWithContent,
  listPublishedPosts,
} from "./backend/repositories/post-repository";
import { requireApiKey } from "./backend/utils/auth";
import { PostDetail } from "./components/post-detail";
import { PostCard } from "./features/posts/components/post-card";
import { type AppContext, type Bindings, getDb, getPostsBucket } from "./db";
import { Layout } from "./ui/layout";

const app = new Hono<{ Bindings: Bindings }>();

app.use("/api/*", async (c, next) => {
  const unauthorized = requireApiKey(c as AppContext);
  if (unauthorized) return unauthorized;
  await next();
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
        console.error(cause);
        return Effect.succeed(
          c.html(
            <Layout>
              <h1>500 - Internal Server Error</h1>
              <p>記事の取得に失敗しました。</p>
            </Layout>,
            500,
          ),
        );
      }),
    ),
  );
});

// 記事ページ
app.get("/posts/:slug", (c) => {
  const slug = c.req.param("slug");
  return Effect.runPromise(
    getPublishedPostWithContent(getDb(c), getPostsBucket(c), slug).pipe(
      Effect.map((result) => {
        if (!result.content) {
          return c.html(
            <Layout>
              <h1>404 - Post Not Found</h1>
              <p>
                <a href="/">ホームに戻る</a>
              </p>
            </Layout>,
            404,
          );
        }
        if (result.etag) {
          c.header("ETag", result.etag);
        } else if (result.post.contentHash) {
          c.header("ETag", result.post.contentHash);
        }
        c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
        return c.html(<PostDetail post={result.post} content={result.content} />);
      }),
      Effect.catchTag("PostNotFoundError", () =>
        Effect.succeed(
          c.html(
            <Layout>
              <h1>404 - Post Not Found</h1>
              <p>
                <a href="/">ホームに戻る</a>
              </p>
            </Layout>,
            404,
          ),
        ),
      ),
      Effect.catchAllCause((cause) => {
        console.error(cause);
        return Effect.succeed(
          c.html(
            <Layout>
              <h1>500 - Internal Server Error</h1>
              <p>記事の取得に失敗しました。</p>
            </Layout>,
            500,
          ),
        );
      }),
    ),
  );
});

export default app;
