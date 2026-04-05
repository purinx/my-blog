import { css } from "hono/css";
import type { Post } from "../backend/domain/post";
import { PostArticle } from "../features/post/components/post-article";
import { TocSidebar } from "../features/post/components/toc-sidebar";
import { Layout } from "../ui/layout";

export function PostDetail({ post, content }: { post: Post; content: string }) {
  const wrapperStyle = css`
    max-width: 720px;
  `;

  return (
    <Layout wide>
      <div id="post-wrapper" class={wrapperStyle}>
        <PostArticle post={post} />
        <TocSidebar />
      </div>
      <script
        type="application/json"
        id="markdown-raw"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
      />
      {import.meta.env.PROD ? (
        <script type="module" src="/static/client/markdown-renderer.js" />
      ) : (
        <script type="module" src="/src/client/markdown-renderer.tsx" />
      )}
    </Layout>
  );
}
