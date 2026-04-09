import { Style } from "hono/css";
import type { Child } from "hono/jsx";
import { renderToString } from "hono/jsx/dom/server";

export function renderHonoStory(element: Child): string {
  return renderToString(
    <>
      {element}
      <Style />
    </>,
  );
}
