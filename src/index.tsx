import { Hono } from 'hono'
import { css } from 'hono/css'
import Layout from './components/Layout'
import PostCard, { type Post } from './components/PostCard'

const app = new Hono()

// ブログ記事のサンプルデータ
const posts: Post[] = [
	{
		id: '1',
		title: 'Hono + React でブログを作る',
		slug: 'hono-react-blog',
		date: '2024-11-01',
		excerpt: 'Cloudflare Workers上で動作する高速なブログシステムを構築します。',
		content: `
## はじめに

Honoは軽量で高速なWebフレームワークです。Cloudflare Workersとの相性が抜群で、エッジでSSRを実現できます。

## なぜHonoを選ぶのか

- 軽量（約14KB）
- TypeScript完全サポート
- 複数のランタイムで動作
- JSXサポート

## まとめ

Honoを使えば、シンプルで高速なブログを簡単に構築できます。
		`.trim(),
	},
	{
		id: '2',
		title: 'Cloudflare Workers 入門',
		slug: 'cloudflare-workers-intro',
		date: '2024-10-28',
		excerpt: 'エッジコンピューティングの世界へようこそ。',
		content: `
## Cloudflare Workersとは

Cloudflare Workersは、世界中のエッジロケーションでコードを実行できるサーバーレスプラットフォームです。

## 特徴

- グローバル展開が瞬時
- コールドスタートなし
- 無料枠が充実

## 使い方

wranglerを使って簡単にデプロイできます。
		`.trim(),
	},
]

// ホームページ
app.get('/', (c) => {
	const titleStyle = css`
		margin-bottom: 2rem;
	`
	return c.html(
		<Layout>
			<h1 class={titleStyle}>Recent Posts</h1>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</Layout>,
	)
})

// 記事ページ
app.get('/posts/:slug', (c) => {
	const slug = c.req.param('slug')
	const post = posts.find((p) => p.slug === slug)

	if (!post) {
		return c.html(
			<Layout>
				<h1>404 - Post Not Found</h1>
				<p>
					<a href="/">ホームに戻る</a>
				</p>
			</Layout>,
			404,
		)
	}

	const articleStyle = css`
		h2 {
			margin-top: 2rem;
			color: #444;
		}
		ul,
		ol {
			padding-left: 1.5rem;
			margin: 1rem 0;
		}
		code {
			background: #f5f5f5;
			padding: 0.2rem 0.4rem;
			border-radius: 4px;
		}
		pre {
			background: #f5f5f5;
			padding: 1rem;
			border-radius: 8px;
			overflow-x: auto;
		}
	`
	const dateStyle = css`
		color: #888;
		margin-bottom: 2rem;
	`
	const backLinkStyle = css`
		display: inline-block;
		margin-top: 2rem;
	`

	// 簡易的なMarkdown→HTML変換
	const contentHtml = post.content
		.split('\n')
		.map((line) => {
			if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
			if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
			if (line.trim() === '') return ''
			return `<p>${line}</p>`
		})
		.join('\n')

	return c.html(
		<Layout>
			<article class={articleStyle}>
				<h1>{post.title}</h1>
				<p class={dateStyle}>{post.date}</p>
				<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
			</article>
			<a href="/" class={backLinkStyle}>
				← Back to Home
			</a>
		</Layout>,
	)
})

export default app
