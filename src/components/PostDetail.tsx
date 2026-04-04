import { css } from "hono/css";
import type { FC } from "hono/jsx";
import type { PostRecord } from "../backend/repositories/postRepository";
import type { TocItem } from "../utils/markdown";
import Layout from "./Layout";

function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

const PostDetail: FC<{ post: PostRecord; contentHtml: string; toc: TocItem[] }> = ({
  post,
  contentHtml,
  toc,
}) => {
  const hasToc = toc.length > 0;

  const wrapperStyle = css`
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 3rem;
    align-items: start;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `;

  const singleColStyle = css`
    max-width: 720px;
  `;

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
    h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
    p {
      margin: 1rem 0;
      line-height: 1.8;
    }
    ul, ol {
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

  const sidebarStyle = css`
    position: sticky;
    top: 2rem;
    @media (max-width: 900px) {
      position: static;
      order: -1;
    }
  `;

  const tocCardStyle = css`
    border: 1px solid #e8e8f0;
    border-radius: 10px;
    padding: 1.25rem;
    background: #fafafe;
  `;

  const tocTitleStyle = css`
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 0.875rem;
  `;

  const tocNavStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const tocLinkBaseStyle = css`
    display: block;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.835rem;
    line-height: 1.4;
    color: #555;
    transition: background 0.15s, color 0.15s;
    &:hover {
      background: #ededf8;
      color: #667eea;
    }
  `;

  // Scroll spy script
  const scrollSpyScript = `
(function() {
  var tocLinks = document.querySelectorAll('#toc-nav a');
  if (!tocLinks.length) return;
  var headings = Array.from(tocLinks).map(function(a) {
    return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
  }).filter(Boolean);
  if (!headings.length) return;
  var activeLink = null;
  function setActive(link) {
    if (activeLink) activeLink.style.cssText = '';
    activeLink = link;
    if (link) { link.style.color = '#667eea'; link.style.background = '#ededf8'; link.style.fontWeight = '600'; }
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        var link = document.querySelector('#toc-nav a[href="#' + id + '"]');
        if (link) setActive(link);
      }
    });
  }, { rootMargin: '-5% 0px -80% 0px' });
  headings.forEach(function(h) { observer.observe(h); });
})();
`;

  return (
    <Layout wide>
      <div class={hasToc ? wrapperStyle : singleColStyle}>
        <article class={articleStyle}>
          <h1>{post.title}</h1>
          <div class={metaStyle}>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <a href="/" class={backLinkStyle}>
            ← ホームに戻る
          </a>
        </article>

        {hasToc && (
          <aside class={sidebarStyle}>
            <div class={tocCardStyle}>
              <p class={tocTitleStyle}>目次</p>
              <ol id="toc-nav" class={tocNavStyle}>
                {toc.map((item) => (
                  <li
                    key={item.id}
                    style={`padding-left: ${(item.level - 1) * 0.75}rem`}
                  >
                    <a href={`#${item.id}`} class={tocLinkBaseStyle}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        )}
      </div>
      <script dangerouslySetInnerHTML={{ __html: scrollSpyScript }} />
    </Layout>
  );
};

export default PostDetail;
