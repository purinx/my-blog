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
        <title>My Blog</title>
        <Style />
        <style>{`
          :root {
            --bg-page: #e6e7ea;
            --bg-surface: #eef0f3;
            --bg-surface-soft: #f3f4f6;
            --bg-sidebar: #ffffff;
            --border-default: #c9cfd8;
            --border-strong: #aeb8c6;
            --text-primary: #0f172a;
            --text-secondary: #253047;
            --text-muted: #4b5a74;
            --link-color: #4e6187;
            --link-hover: #3c4e70;
            --header-grad-start: #6f7f98;
            --header-grad-end: #62728b;
            --header-text: #f8fafc;
            --header-border: rgba(255, 255, 255, 0.18);
            --accent-soft: #dfe5f0;
            --accent-border: #b9c5d9;
            --accent-strong: #6078a3;
            --accent-outline: #8fa2bf;
            --button-saving: #55657f;
            --code-inline-bg: #d9dde5;
            --code-block-bg: #2e3340;
            --code-block-text: #d7deeb;
            --quote-bg: #e3e8f0;
            --shadow-soft: rgba(32, 41, 56, 0.08);
            --hover-grad-start: #3a5bbf;
            --hover-grad-end: #6f28b8;
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background: var(--bg-page);
          }
          a { color: var(--link-color); }
          a:hover { color: var(--link-hover); }
          h1, h2, h3 { margin: 1rem 0; }
          p { margin: 0.5rem 0; }
        `}</style>
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
