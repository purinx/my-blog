import { cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { submitButtonStyle } from "./button.css";

type ButtonProps = PropsWithChildren<{
  id?: string;
  type?: "button" | "submit" | "reset";
  form?: string;
  class?: string | Promise<string>;
  disabled?: boolean;
  "data-state"?: string;
}>;

export function Button({
  id,
  type,
  form,
  class: className,
  disabled,
  children,
  "data-state": dataState,
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      form={form}
      class={cx(submitButtonStyle, className)}
      disabled={disabled}
      data-state={dataState}
    >
      {children}
    </button>
  );
}
