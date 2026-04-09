import { css } from "hono/css";

export const fieldGroupStyle = css`
  display: grid;
  gap: 0.4rem;
`;

export const inputStyle = css`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.5;
  background: var(--bg-surface-soft);
  color: var(--text-primary);
  &:focus {
    outline: 2px solid var(--accent-outline);
    outline-offset: 2px;
  }
`;

export const selectStyle = css`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  font-size: 0.95rem;
  background: var(--bg-surface-soft);
  color: var(--text-primary);
  &:focus {
    outline: 2px solid var(--accent-outline);
    outline-offset: 2px;
  }
`;

export const errorStyle = css`
  color: #c0392b;
  font-size: 0.9rem;
  padding: 0.6rem 0.9rem;
  background: #fdecea;
  border: 1px solid #e57373;
  border-radius: 6px;
`;
