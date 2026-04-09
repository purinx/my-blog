import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type MainPaneProps = PropsWithChildren<{
  maxWidth: string;
}>;

export function MainPane({ children, maxWidth }: MainPaneProps) {
  const mainStyle = css`
    max-width: ${maxWidth};
    margin: 2rem auto;
    padding: 0 1rem;
  `;

  return <main class={mainStyle}>{children}</main>;
}
