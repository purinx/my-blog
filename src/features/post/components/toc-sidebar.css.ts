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
  border: 1px solid var(--border-default);
  border-radius: 10px;
  padding: 1.25rem;
  background: var(--bg-surface);
`;

export const tocTitleStyle = css`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.875rem;
`;

export const tocNavStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;
