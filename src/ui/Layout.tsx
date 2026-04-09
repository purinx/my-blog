import { Style, css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { Header } from "./header";
import { MainPane } from "./main-pane";

type LayoutProps = PropsWithChildren<{
  wide?: boolean;
}>;

export function Layout({ children, wide }: LayoutProps) {
  const maxWidth = wide ? "1100px" : "800px";

  const footerStyle = css`
    text-align: center;
    padding: 2rem;
    color: #666;
    border-top: 1px solid #eee;
    margin-top: 3rem;
  `;

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Blog</title>
        <Style />
        <style>{`
					* { margin: 0; padding: 0; box-sizing: border-box; }
					body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #333; }
					a { color: #667eea; }
					h1, h2, h3 { margin: 1rem 0; }
					p { margin: 0.5rem 0; }
				`}</style>
      </head>
      <body>
        <Header maxWidth={maxWidth} />
        <MainPane maxWidth={maxWidth}>{children}</MainPane>
        <footer class={footerStyle}>
          <p>&copy; 2024 My Blog. Powered by Hono + Cloudflare Workers.</p>
        </footer>
      </body>
    </html>
  );
}
