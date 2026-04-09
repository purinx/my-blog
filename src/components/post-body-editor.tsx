import type { Post } from "../backend/domain/post";
import {
  backButtonStyle,
  formStyle,
  headerRowStyle,
  headingGroupStyle,
  labelStyle,
  saveRowStyle,
  submitBaseStyle,
  titleEditButtonStyle,
  titleInputStyle,
  textareaStyle,
} from "./post-body-editor-style";
import { Button } from "../lib/ui/button";
import { Layout } from "../ui/layout";

type PostBodyEditorProps = {
  post: Post;
  content: string;
  saved?: boolean;
};

export function PostBodyEditor({ post, content, saved }: PostBodyEditorProps) {
  const submitLabel = saved ? "保存済み" : "保存";
  const submitState = saved ? "saved" : "idle";

  return (
    <Layout>
      <div class={headerRowStyle}>
        <a href={`/posts/${post.slug}`} class={backButtonStyle} aria-label="記事を見る" title="記事を見る">
          <img src="/icons/chevron-left.svg" alt="" aria-hidden="true" width="15" height="15" />
        </a>
        <div class={headingGroupStyle}>
          <input
            id="post-body-editor-title"
            name="title"
            form="post-body-editor-form"
            value={post.title}
            readOnly
            class={titleInputStyle}
            aria-label="記事タイトル"
          />
        </div>
        <Button id="post-body-editor-title-toggle" type="button" class={titleEditButtonStyle}>
          タイトル編集
        </Button>
      </div>
      <div class={saveRowStyle}>
        <Button
          id="post-body-editor-submit"
          type="submit"
          form="post-body-editor-form"
          class={submitBaseStyle}
          data-state={submitState}
        >
          {submitLabel}
        </Button>
      </div>
      <form id="post-body-editor-form" method="post" class={formStyle}>
        <label for="post-body-editor-textarea" class={labelStyle}>
          本文 (Markdown)
        </label>
        <textarea id="post-body-editor-textarea" name="content" class={textareaStyle}>
          {content}
        </textarea>
      </form>
      {import.meta.env.PROD ? (
        <script type="module" src="/static/client/post-body-editor.js" />
      ) : (
        <script type="module" src="/src/client/post-body-editor.ts" />
      )}
    </Layout>
  );
}
