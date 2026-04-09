import type { PostSummary } from "../../../backend/domain/post";
import { cardStyle, dateStyle, titleStyle } from "./post-card.css";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <a class={cardStyle} href={`/posts/${post.slug}`}>
      <h2 class={titleStyle}>{post.title}</h2>
      <p class={dateStyle}>{post.publishedAt}</p>
      <p>{post.excerpt}</p>
    </a>
  );
}
