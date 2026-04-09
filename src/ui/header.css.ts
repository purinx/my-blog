import { css } from "hono/css";

export const headerStyle = css`
  background: linear-gradient(135deg, var(--header-grad-start) 0%, var(--header-grad-end) 100%);
  color: var(--header-text);
  height: 72px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--header-border);
`;

export const navStyle = css`
  width: 100%;
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const logoStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--header-text);
`;
