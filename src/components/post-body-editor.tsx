import type { Post } from "../backend/domain/post";
import { linkButtonBlockStyle } from "../lib/ui/button.css";
import { Button } from "../lib/ui/button";
import { Layout } from "../ui/layout";
import {
  backButtonStyle,
  editorContentFrameStyle,
  editorContentStyle,
  editorShellStyle,
  formStyle,
  headerRowStyle,
  headingGroupStyle,
  labelStyle,
  saveRowStyle,
  sidebarNavStyle,
  sidebarStyle,
  tabLinkStyle,
  tabListStyle,
  tabTitleStyle,
  textareaStyle,
  titleInputStyle,
} from "./post-body-editor-style";

type PostBodyEditorProps = {
  post: Post;
  content: string;
  posts: Post[];
};

export function PostBodyEditor({ post, content, posts }: PostBodyEditorProps) {
  const submitLabel = "保存済み";
  const submitState = "saved";

  return (
    <Layout hideFooter wide fullWidth>
      <div class={editorShellStyle}>
        <aside class={sidebarStyle}>
          <nav class={sidebarNavStyle}>
            <a href="/posts/new" class={linkButtonBlockStyle}>+ 新規作成</a>
            <ul class={tabListStyle}>
              {posts.map(function (item) {
                const isActive = item.slug === post.slug;
                return (
                  <li key={item.id}>
                    <a
                      href={`/posts/${item.slug}/edit`}
                      class={tabLinkStyle}
                      data-active={isActive ? "true" : "false"}
                    >
                      <span class={tabTitleStyle}>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <div class={editorContentFrameStyle}>
          <section class={editorContentStyle}>
            <div class={headerRowStyle}>
              <a href={`/posts/${post.slug}`} class={backButtonStyle} aria-label="記事を見る" title="記事を見る">
                <img src="/icons/chevron-left.svg" alt="" aria-hidden="true" />
              </a>
              <div class={headingGroupStyle}>
                <textarea
                  id="post-body-editor-title"
                  name="title"
                  form="post-body-editor-form"
                  rows={1}
                  wrap="soft"
                  readOnly
                  class={titleInputStyle}
                  aria-label="記事タイトル"
                >
                  {post.title}
                </textarea>
              </div>
            </div>
            <div class={saveRowStyle}>
              <Button
                id="post-body-editor-submit"
                type="submit"
                form="post-body-editor-form"
                data-state={submitState}
              >
                <span data-role="submit-content">
                  <span id="post-body-editor-submit-icon" data-role="submit-icon" aria-hidden="true" />
                  <span data-role="submit-label">{submitLabel}</span>
                </span>
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
          </section>
        </div>
      </div>
    </Layout>
  );
}
