import { css } from "hono/css";

export const wrapperStyle = css`
  display: grid;
  place-items: center;
  min-height: 60vh;
`;

export const cardStyle = css`
  display: grid;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-default);
  border-radius: 12px;
  background: var(--bg-surface-soft);
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

export const headingStyle = css`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`;

export const githubButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.65rem 1.2rem;
  background: #24292f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #1b1f23;
  }
`;

export const devBypassButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.2rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px dashed var(--border-default);
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: var(--bg-surface);
    color: var(--text-primary);
  }
`;

export const errorStyle = css`
  color: #c0392b;
  font-size: 0.875rem;
  padding: 0.6rem 0.9rem;
  background: #fdecea;
  border: 1px solid #e57373;
  border-radius: 6px;
  margin: 0;
`;
