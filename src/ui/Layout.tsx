import { Style, css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
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

  const footerStyle = css`
    text-align: center;
    padding: 2rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border-default);
    margin-top: 3rem;
    background: var(--bg-surface);
  `;

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Blog</title>
        <link rel="stylesheet" href="/variables.css" />
        <link rel="stylesheet" href="/style.css" />
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
