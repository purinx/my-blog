import type { PropsWithChildren } from "hono/jsx";

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
    <button id={id} type={type} form={form} class={className} disabled={disabled} data-state={dataState}>
      {children}
    </button>
  );
}
