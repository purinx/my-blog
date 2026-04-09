import type { Post } from "../backend/domain/post";
import { linkButtonBlockStyle } from "../lib/ui/button.css";
import { Button } from "../lib/ui/button";
import { Layout } from "../ui/layout";
import {
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
import { errorStyle, fieldGroupStyle, inputStyle, selectStyle } from "./post-new.css";

type PostNewProps = {
  posts: Post[];
  error?: string;
  values?: {
    slug?: string;
    title?: string;
    excerpt?: string;
    content?: string;
    status?: string;
  };
};

export function PostNew({ posts, error, values }: PostNewProps) {
  return (
    <Layout hideFooter wide fullWidth>
      <div class={editorShellStyle}>
        <aside class={sidebarStyle}>
          <nav class={sidebarNavStyle}>
            <a href="/posts/new" class={linkButtonBlockStyle}>
              + 新規作成
            </a>
            <ul class={tabListStyle}>
              {posts.map(function (item) {
                return (
                  <li key={item.id}>
                    <a
                      href={`/posts/${item.slug}/edit`}
                      class={tabLinkStyle}
                      data-active="false"
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
              <div class={headingGroupStyle}>
                <textarea
                  rows={1}
                  wrap="soft"
                  class={titleInputStyle}
                  aria-label="記事タイトル"
                  name="title"
                  form="post-new-form"
                  placeholder="タイトル"
                >
                  {values?.title ?? ""}
                </textarea>
              </div>
            </div>
            <div class={saveRowStyle}>
              <Button type="submit" form="post-new-form">
                <span data-role="submit-content">
                  <span data-role="submit-label">作成</span>
                </span>
              </Button>
            </div>
            <form id="post-new-form" method="post" action="/posts/new" class={formStyle}>
              {error ? <p class={errorStyle}>{error}</p> : null}
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-slug">Slug</label>
                <input
                  id="post-new-slug"
                  name="slug"
                  type="text"
                  required
                  placeholder="my-new-post"
                  class={inputStyle}
                  value={values?.slug ?? ""}
                />
              </div>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-excerpt">概要</label>
                <input
                  id="post-new-excerpt"
                  name="excerpt"
                  type="text"
                  required
                  placeholder="記事の概要"
                  class={inputStyle}
                  value={values?.excerpt ?? ""}
                />
              </div>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-status">ステータス</label>
                <select id="post-new-status" name="status" class={selectStyle}>
                  <option value="draft" selected={values?.status !== "published"}>下書き</option>
                  <option value="published" selected={values?.status === "published"}>公開</option>
                </select>
              </div>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-content">本文 (Markdown)</label>
                <textarea id="post-new-content" name="content" class={textareaStyle}>
                  {values?.content ?? ""}
                </textarea>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}
