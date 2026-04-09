import { css } from "hono/css";

export const articleStyle = css`
  min-width: 0;
  background: var(--post-article-bg);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  h1 {
    font-size: 1.75rem;
    line-height: 1.4;
    margin: 0;
  }
  h2 {
    font-size: 1.375rem;
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
  }
  h3 {
    font-size: 1.125rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
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
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
    display: block;
    overflow-x: auto;
  }
  th,
  td {
    border: 1px solid var(--border-default);
    padding: 0.55rem 0.7rem;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: var(--bg-surface);
    font-weight: 700;
  }
  code {
    background: var(--code-inline-bg);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.875em;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  }
  pre {
    background: var(--code-block-bg);
    color: var(--code-block-text);
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
    border-left: 4px solid var(--accent-strong);
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    background: var(--quote-bg);
    border-radius: 0 6px 6px 0;
  }
  blockquote p {
    margin: 0.25rem 0;
    color: var(--text-secondary);
  }
  hr {
    border: none;
    border-top: 1px solid var(--border-default);
    margin: 2rem 0;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
  }
  #post-content a {
    color: var(--link-color);
    text-decoration: underline;
  }
`;

export const titleRowStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const titleStyle = css`
  min-width: 0;
  flex: 1 1 auto;
`;

export const editLinkStyle = css`
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: var(--text-secondary);
  border: 0;
  border-radius: 0;
  background: transparent;
  flex-shrink: 0;
  img {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

export const srOnlyStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const metaStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-default);
`;
