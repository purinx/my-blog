import type { Context } from "hono";

export type Bindings = {
  DB: D1Database;
  POSTS_BUCKET: R2Bucket;
  API_KEY?: string;
};

export type AppContext = Context<{ Bindings: Bindings }>;

export function getDb(c: AppContext) {
  return c.env.DB;
}

export function getPostsBucket(c: AppContext) {
  return c.env.POSTS_BUCKET;
}
