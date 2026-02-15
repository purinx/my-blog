import { css } from 'hono/css'
import type { FC } from 'hono/jsx'

export type Post = {
	id: string
	title: string
	slug: string
	date: string
	excerpt: string
	content: string
}

const PostCard: FC<{ post: Post }> = ({ post }) => {
	const cardStyle = css`
		border: 1px solid #eee;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		transition: box-shadow 0.2s;
		&:hover {
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		}
	`
	const titleStyle = css`
		margin: 0 0 0.5rem;
		a {
			text-decoration: none;
			color: #333;
		}
		a:hover {
			color: #667eea;
		}
	`
	const dateStyle = css`
		color: #888;
		font-size: 0.875rem;
	`

	return (
		<a href={`/posts/${post.slug}`}>
			<article class={cardStyle}>
				<h2 class={titleStyle}>{post.title}</h2>
				<p class={dateStyle}>{post.date}</p>
				<p>{post.excerpt}</p>
			</article>
		</a>
	)
}

export default PostCard
