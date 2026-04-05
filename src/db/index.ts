import type { Context } from "hono";

export type Bindings = {
  DB: D1Database;
  API_KEY?: string;
};

export type AppContext = Context<{ Bindings: Bindings }>;

export function getDb(c: AppContext) {
  return c.env.DB;
}
