import { css } from "hono/css";

export function mainStyle(maxWidth: string) {
  return css`
    flex: 1;
    max-width: ${maxWidth};
    margin: 2rem auto;
    padding: 0 1rem;
  `;
}
