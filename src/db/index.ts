import type { Context } from "hono";

export type Bindings = {
  DB: D1Database;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
};

export type AppContext = Context<{ Bindings: Bindings }>;

export function getDb(c: AppContext) {
  return c.env.DB;
}
