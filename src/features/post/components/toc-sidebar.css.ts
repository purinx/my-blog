import { css } from "hono/css";

export const sidebarStyle = css`
  position: sticky;
  top: 2rem;
  @media (max-width: 900px) {
    position: static;
    order: -1;
  }
`;

export const tocCardStyle = css`
  border: 1px solid var(--toc-card-border);
  border-radius: 10px;
  padding: 1.25rem;
  background: var(--toc-card-bg);
`;

export const tocTitleStyle = css`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--toc-title-color);
  margin-bottom: 0.875rem;
`;

export const tocNavStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
  [data-toc-link] {
    display: block;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.835rem;
    line-height: 1.4;
    color: var(--toc-link-color);
  }
  [data-toc-link]:hover {
    color: var(--toc-link-hover-color);
    background: var(--toc-link-hover-bg);
  }
  [data-toc-link].is-active {
    color: var(--toc-link-active-color);
    background: var(--toc-link-active-bg);
    font-weight: 600;
  }
`;
