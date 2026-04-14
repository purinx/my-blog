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
  apiKey: string;
};

const submitScript = `
document.getElementById('post-new-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var form = e.currentTarget;
  var els = form.elements;
  var errorEl = document.getElementById('post-new-error');
  errorEl.hidden = true;
  var data = {
    slug: els['slug'].value.trim(),
    title: els['title'].value.trim(),
    excerpt: els['excerpt'].value.trim(),
    content: els['content'].value.trim(),
    status: els['status'].value,
  };
  try {
    var res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + form.dataset.apiKey,
      },
      body: JSON.stringify(data),
    });
    var body = await res.json();
    if (res.status === 201) {
      window.location.href = '/posts/' + body.post.slug + '/edit';
    } else {
      errorEl.textContent = body.error || '記事の作成に失敗しました。';
      errorEl.hidden = false;
    }
  } catch (_) {
    errorEl.textContent = '記事の作成に失敗しました。';
    errorEl.hidden = false;
  }
});
`;

export function PostNew({ posts, apiKey }: PostNewProps) {
  return (
    <Layout hideFooter wide fullWidth>
      <div class={editorShellStyle}>
        <aside class={sidebarStyle}>
          <nav class={sidebarNavStyle}>
            <a href="/posts/new" class={linkButtonBlockStyle}>
              <span data-role="button-content">
                <span data-role="button-icon" aria-hidden="true" />
                新規作成
              </span>
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
                ></textarea>
              </div>
            </div>
            <div class={saveRowStyle}>
              <Button type="submit" form="post-new-form">
                <span data-role="submit-content">
                  <span data-role="submit-label">作成</span>
                </span>
              </Button>
            </div>
            <form id="post-new-form" class={formStyle} data-api-key={apiKey}>
              <p id="post-new-error" class={errorStyle} hidden={true}></p>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-slug">Slug</label>
                <input
                  id="post-new-slug"
                  name="slug"
                  type="text"
                  required
                  placeholder="my-new-post"
                  class={inputStyle}
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
                />
              </div>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-status">ステータス</label>
                <select id="post-new-status" name="status" class={selectStyle}>
                  <option value="draft">下書き</option>
                  <option value="published">公開</option>
                </select>
              </div>
              <div class={fieldGroupStyle}>
                <label class={labelStyle} for="post-new-content">本文 (Markdown)</label>
                <textarea id="post-new-content" name="content" class={textareaStyle}></textarea>
              </div>
            </form>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: submitScript }} />
    </Layout>
  );
}
