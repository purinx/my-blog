# Blog (Hono SSR on Cloudflare Pages)

Minimal blog app built with Hono SSR, deployed on Cloudflare Pages with D1 as the database.

## Tech Stack

- Hono (HTTP framework + JSX SSR)
- React 18 (JSX UI, server-rendered only)
- Vite (build/dev via `@hono/vite-cloudflare-pages`)
- Cloudflare Pages + D1 (deployment target)
- Effect (async / error handling in backend)
- Valibot (request validation)
- Vitest (unit tests)
- Storybook (UI component development)
- Prettier (format)
- Oxlint (lint)
- TypeScript
- pnpm (package manager)

## Features

- Home page listing recent posts
- Post detail pages routed by slug (`/posts/:slug`)
- Table of contents sidebar per post
- Markdown-to-HTML rendering via unified/remark/rehype pipeline
- Server-side rendered HTML using Hono JSX
- Post create / edit UI with live Markdown editor
- Auth (login) page

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Cloudflare Wrangler CLI

### Install

```bash
pnpm install
```

### Environment variables

For local development, create a `.env` file in the project root:

```
API_KEY=your-local-api-key
```

For production, register secrets via Wrangler:

```bash
wrangler secret put API_KEY
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Lint / Format / Check

```bash
pnpm lint           # oxlint
pnpm lint:fix       # oxlint --fix
pnpm format         # prettier --write
pnpm format:check   # prettier --check
pnpm check:type     # tsc --noEmit
pnpm check          # type + lint + format check
pnpm check:fix      # type + lint fix + format
```

### Preview (Cloudflare Pages runtime)

```bash
pnpm preview
```

### Deploy

```bash
pnpm deploy
```

### DB

```bash
pnpm sqlite         # open local D1 SQLite DB
```

Migrations are in `migrations/` and applied via Wrangler.

## Project Structure

```
src/
  index.tsx                    # Hono app entry; all routes
  backend/
    controllers/               # One controller per REST resource
      api/                     # API routes (/api/*)
    repositories/              # All D1 data access
    domain/
      post/                    # Post model + value objects (Effect Data.Class)
    utils/
  db/
    index.ts                   # Bindings (D1, API_KEY) + getDb helper
  components/                  # Container components used directly from routes
  features/
    post/components/           # Post detail feature components
    posts/components/          # Post list feature components
  ui/                          # Reusable UI primitives
  client/                      # Client-side scripts (Markdown editor)
  utils/
    markdown.ts                # Markdown → HTML + TOC extraction
migrations/                    # D1 SQL migration files
```
