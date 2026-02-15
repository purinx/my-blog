# Blog (Hono + React on Cloudflare Pages)

Minimal blog app built with Hono and React, rendered on the edge and deployed via Cloudflare Pages.

## Tech Stack

- Hono (HTTP framework + JSX SSR)
- React 18 (JSX UI)
- Vite (build/dev tooling)
- Cloudflare Pages/Workers (deployment target via Wrangler)
- TypeScript
- Biome (linting)
- pnpm (package manager)

## Features

- Home page that lists recent posts
- Post detail pages routed by slug (`/posts/:slug`)
- Simple Markdown-to-HTML rendering for post content
- Server-side rendered HTML using Hono JSX
- Componentized layout and post cards
- Basic responsive styling with `hono/css`

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Cloudflare Wrangler CLI (optional for preview/deploy)

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview (Cloudflare Pages runtime)

```bash
pnpm preview
```

### Deploy

```bash
pnpm deploy
```

## Project Structure

- `src/index.tsx`: Hono app, routes, and sample post data
- `src/components/Layout.tsx`: shared layout shell and global styles
- `src/components/PostCard.tsx`: post list item component
- `wrangler.toml`: Cloudflare Pages configuration

## Notes

- Post data is currently in-memory. Replace `posts` in `src/index.tsx` with a database or CMS when you’re ready.
- `compatibility_date` is set in `wrangler.toml` for Cloudflare runtime stability.
