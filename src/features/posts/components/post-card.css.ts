import { css } from "hono/css";

export const cardStyle = css`
  display: block;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: var(--post-card-bg-default);
  transition:
    box-shadow 0.2s,
    border-color 0.2s,
    background-color 0.2s;
  text-decoration: none;
  color: var(--text-primary);
  &:hover {
    border-color: var(--border-strong);
    background: var(--post-card-bg-hover);
    box-shadow: 0 6px 14px var(--shadow-soft);
    color: var(--post-card-text-hover);
  }
`;

export const titleStyle = css`
  margin: 0 0 0.5rem;
`;

export const dateStyle = css`
  color: var(--text-muted);
  font-size: 0.875rem;
`;
