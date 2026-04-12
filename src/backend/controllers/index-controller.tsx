import { Data, Effect } from "effect";
import { ErrorPage } from "../../components/Error";
import { PostCard } from "../../features/posts/components/post-card";
import type { AppContext } from "../../db";
import { getDb } from "../../db";
import { linkButtonPillStyle } from "../../lib/ui/button.css";
import { headerRowStyle, pageTitleStyle } from "../../index.css";
import { Layout } from "../../ui/layout";
import { listPublishedPosts } from "../repositories/post-repository";
import { logServerError } from "../utils/error-log";

class IndexController extends Data.Class<{}> {
  static getHomePage(c: AppContext) {
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
  }
}

export function getHomePage(c: AppContext) {
  return IndexController.getHomePage(c);
}
