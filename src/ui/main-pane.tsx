import type { PropsWithChildren } from "hono/jsx";
import { mainStyle } from "./main-pane.css";

type MainPaneProps = PropsWithChildren<{
  maxWidth: string;
}>;

export function MainPane({ children, maxWidth }: MainPaneProps) {
  return <main class={mainStyle(maxWidth)}>{children}</main>;
}
