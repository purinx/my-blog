import type { Post } from "../../../backend/domain/post";
import {
  articleStyle,
  editLinkStyle,
  metaStyle,
  srOnlyStyle,
  titleRowStyle,
  titleStyle,
} from "./post-article.css";

function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

type PostArticleProps = {
  post: Post;
  editHref: string;
};

export function PostArticle({ post, editHref }: PostArticleProps) {
  return (
    <article class={articleStyle}>
      <div class={titleRowStyle}>
        <h1 class={titleStyle}>{post.title}</h1>
        <a href={editHref} class={editLinkStyle} aria-label="本文を編集" title="本文を編集">
          <img src="/icons/pencil-2.svg" alt="" aria-hidden="true" />
          <span class={srOnlyStyle}>本文を編集</span>
        </a>
      </div>
      <div class={metaStyle}>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
      <div id="post-content" />
    </article>
  );
}
