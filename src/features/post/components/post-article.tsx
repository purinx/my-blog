import { css } from "hono/css";
import type { FC } from "hono/jsx";
import type { PostRecord } from "../../../backend/repositories/post-repository";

function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

const PostArticle: FC<{ post: PostRecord }> = ({ post }) => {
  const articleStyle = css`
    min-width: 0;
    h1 {
      font-size: 1.75rem;
      line-height: 1.4;
      margin-bottom: 0.75rem;
    }
    h2 {
      font-size: 1.375rem;
      margin-top: 2.5rem;
      margin-bottom: 0.75rem;
      padding-bottom: 0.4rem;
      border-bottom: 2px solid #667eea;
      color: #333;
    }
    h3 {
      font-size: 1.125rem;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      color: #444;
    }
    h4,
    h5,
    h6 {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
    p {
      margin: 1rem 0;
      line-height: 1.8;
    }
    ul,
    ol {
      padding-left: 1.75rem;
      margin: 1rem 0;
    }
    li {
      margin: 0.25rem 0;
      line-height: 1.7;
    }
    code {
      background: #f0f0f5;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.875em;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    }
    pre {
      background: #1e1e2e;
      color: #cdd6f4;
      padding: 1.25rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    pre code {
      background: none;
      padding: 0;
      font-size: 0.875rem;
      color: inherit;
    }
    blockquote {
      border-left: 4px solid #667eea;
      margin: 1.5rem 0;
      padding: 0.75rem 1.25rem;
      background: #f5f5ff;
      border-radius: 0 6px 6px 0;
    }
    blockquote p {
      margin: 0.25rem 0;
      color: #555;
    }
    hr {
      border: none;
      border-top: 1px solid #eee;
      margin: 2rem 0;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
    }
    a {
      color: #667eea;
      text-decoration: underline;
    }
  `;

  const metaStyle = css`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #888;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
  `;

  const backLinkStyle = css`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 3rem;
    color: #667eea;
    font-size: 0.9rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <article class={articleStyle}>
      <h1>{post.title}</h1>
      <div class={metaStyle}>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
      <div id="post-content" />
      <a href="/" class={backLinkStyle}>
        ← ホームに戻る
      </a>
    </article>
  );
};

export default PostArticle;
