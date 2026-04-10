import { cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { iconButtonStyle } from "./icon-button.css";

type IconButtonProps = PropsWithChildren<{
  href: string;
  label: string;
  title?: string;
  class?: string | Promise<string>;
}>;

export function IconButton({ href, label, title, class: className, children }: IconButtonProps) {
  return (
    <a href={href} class={cx(iconButtonStyle, className)} aria-label={label} title={title ?? label}>
      {children}
    </a>
  );
}
