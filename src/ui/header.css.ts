import { css } from "hono/css";

export const headerStyle = css`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--header-grad-start) 0%, var(--header-grad-end) 100%);
  color: var(--header-text);
  height: 72px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--header-border);
  transition: background 0.22s ease;
  &:hover {
    background: linear-gradient(135deg, var(--hover-grad-start) 0%, var(--hover-grad-end) 100%);
  }
`;

export const headerLinkStyle = css`
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
  color: inherit;
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
