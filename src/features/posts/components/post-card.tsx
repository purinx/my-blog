import { css } from "hono/css";
import type { PostSummary } from "../../../backend/domain/post";

export function PostCard({ post }: { post: PostSummary }) {
  const cardStyle = css`
    display: block;
    border: 1px solid var(--border-default);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: var(--bg-surface);
    transition:
      box-shadow 0.2s,
      border-color 0.2s,
      background-color 0.2s;
    text-decoration: none;
    color: var(--text-primary);
    &:hover {
      border-color: var(--border-strong);
      background: var(--bg-surface-soft);
      box-shadow: 0 6px 14px var(--shadow-soft);
    }
  `;
  const titleStyle = css`
    margin: 0 0 0.5rem;
  `;
  const dateStyle = css`
    color: var(--text-muted);
    font-size: 0.875rem;
  `;

  return (
    <a class={cardStyle} href={`/posts/${post.slug}`}>
      <h2 class={titleStyle}>{post.title}</h2>
      <p class={dateStyle}>{post.publishedAt}</p>
      <p>{post.excerpt}</p>
    </a>
  );
}
