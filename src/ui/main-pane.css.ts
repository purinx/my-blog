import { css } from "hono/css";

export function mainStyle(maxWidth: string) {
  return css`
    max-width: ${maxWidth};
    margin: 2rem auto;
    padding: 0 1rem;
  `;
}
