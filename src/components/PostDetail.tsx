import { css } from "hono/css";
import type { FC } from "hono/jsx";
import type { PostRecord } from "../backend/repositories/postRepository";
import PostArticle from "../features/post/components/PostArticle";
import TocSidebar from "../features/post/components/TocSidebar";
import Layout from "../ui/Layout";

const PostDetail: FC<{ post: PostRecord; content: string }> = ({ post, content }) => {
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
      <script src="/markdown-renderer.js" defer />
    </Layout>
  );
};

export default PostDetail;
