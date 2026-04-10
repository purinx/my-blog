import { Style } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { footerStyle } from "./layout.css";
import { Header } from "./header";
import { MainPane } from "./main-pane";

type LayoutProps = PropsWithChildren<{
  wide?: boolean;
  hideFooter?: boolean;
  fullWidth?: boolean;
}>;

export function Layout({ children, wide, hideFooter, fullWidth }: LayoutProps) {
  const headerMaxWidth = wide ? "1100px" : "800px";
  const mainMaxWidth = fullWidth ? "none" : headerMaxWidth;

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/variables.css" />
        <link rel="stylesheet" href="/style.css" />
        <title>My Blog</title>
        <Style />
      </head>
      <body>
        <Header maxWidth={headerMaxWidth} />
        <MainPane maxWidth={mainMaxWidth}>{children}</MainPane>
        {hideFooter ? null : (
          <footer class={footerStyle}>
            <p>&copy; 2024 My Blog. Powered by Hono + Cloudflare Workers.</p>
          </footer>
        )}
      </body>
    </html>
  );
}
