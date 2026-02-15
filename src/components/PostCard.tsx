import { css } from 'hono/css'
import type { FC } from 'hono/jsx'
import type { PostSummary } from '../backend/repositories/postRepository'

const PostCard: FC<{ post: PostSummary }> = ({ post }) => {
	const cardStyle = css`
		display: block;
		border: 1px solid #eee;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		transition: box-shadow 0.2s;
		text-decoration: none;
		color: #333;
		&:hover {
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		}
	`
	const titleStyle = css`
		margin: 0 0 0.5rem;
	`
	const dateStyle = css`
		color: #888;
		font-size: 0.875rem;
	`

	return (
		<a class={cardStyle} href={`/posts/${post.slug}`}>
			<h2 class={titleStyle}>{post.title}</h2>
			<p class={dateStyle}>{post.publishedAt}</p>
			<p>{post.excerpt}</p>
		</a>
	)
}

export default PostCard
