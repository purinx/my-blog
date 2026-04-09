import { Style, css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { rootCssVariables } from "../lib/style/variables";
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
        <Style />
        <style>{`
          ${rootCssVariables}
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
