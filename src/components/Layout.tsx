import { Style, css } from 'hono/css'
import type { FC } from 'hono/jsx'

const Layout: FC = ({ children }) => {
	const headerStyle = css`
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 2rem 0;
	`
	const navStyle = css`
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`
	const logoStyle = css`
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		color: white;
	`
	const mainStyle = css`
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
	`
	const footerStyle = css`
		text-align: center;
		padding: 2rem;
		color: #666;
		border-top: 1px solid #eee;
		margin-top: 3rem;
	`

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
				<header class={headerStyle}>
					<nav class={navStyle}>
						<a href="/" class={logoStyle}>
							My Blog
						</a>
					</nav>
				</header>
				<main class={mainStyle}>{children}</main>
				<footer class={footerStyle}>
					<p>&copy; 2024 My Blog. Powered by Hono + Cloudflare Workers.</p>
				</footer>
			</body>
		</html>
	)
}

export default Layout
