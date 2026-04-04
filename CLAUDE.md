# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # local dev server (Hono + Vite)
pnpm build        # production build to ./dist
pnpm preview      # serve dist with wrangler pages dev
pnpm deploy       # deploy via wrangler
pnpm lint         # lint
pnpm format       # format
pnpm check        # type-check
pnpm check:fix    # type-check with auto-fix
pnpm sqlite       # open local D1 sqlite DB (wrangler local state)
```

No test suite exists in this project.

## Architecture

This is a **Hono SSR blog** running on **Cloudflare Pages**, with:

- **`src/index.tsx`** — single entry point; defines all routes using Hono. Routes render JSX directly (no client-side React). API routes under `/api/*` are protected by Bearer/x-api-key auth.
- **`src/db/index.ts`** — defines `Bindings` (D1 + R2 + API_KEY) and helper accessors (`getDb`, `getPostsBucket`).
- **`src/backend/repositories/postRepository.ts`** — all D1/R2 data access. Post metadata lives in D1 (`posts` table); post content (Markdown) lives in R2 at key `posts/<slug>.md`.
- **`src/utils/markdown.ts`** — renders Markdown to HTML via unified/remark/rehype pipeline; also extracts a TOC.
- **`src/components/`** — Layout, PostCard, PostDetail (JSX, server-rendered only).

### Storage split

- **D1** stores post metadata (id, slug, title, excerpt, status, timestamps, content key/hash/length).
- **R2** stores raw Markdown content, keyed as `posts/<slug>.md`. ETags from R2 are forwarded as HTTP ETags.

### Deployment

- `wrangler.toml` configures Cloudflare Pages with D1 binding `DB` and R2 binding `POSTS_BUCKET`.
- DB migrations are in `migrations/` and applied via wrangler (`database_id` in wrangler.toml is a placeholder for local dev).
- `vite-plus` wraps Vite; `@hono/vite-cloudflare-pages` and `@hono/vite-dev-server` handle local dev and bundling.
