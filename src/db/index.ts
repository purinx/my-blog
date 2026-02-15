import type { Context } from 'hono'

export type Bindings = {
	DB: D1Database
	POSTS_BUCKET: R2Bucket
	API_KEY?: string
}

export type AppContext = Context<{ Bindings: Bindings }>

export const getDb = (c: AppContext) => c.env.DB
export const getPostsBucket = (c: AppContext) => c.env.POSTS_BUCKET
