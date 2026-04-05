#!/usr/bin/env bash
# Seed local D1 posts table with sample data
# Usage: bash tmp/seed-posts.sh

set -euo pipefail

DB="blog-db"

run() {
  pnpm wrangler d1 execute "$DB" --local --command "$1"
}

run "DELETE FROM posts;"

run "INSERT INTO posts (id, slug, title, excerpt, status, published_at, updated_at, content, content_length, content_hash) VALUES
  ('post-001', 'hello-world', 'Hello World', 'はじめての投稿です。このブログへようこそ。', 'published', '2026-01-10T09:00:00Z', '2026-01-10T09:00:00Z', '# Hello World\n\nこれは最初の記事です。', 38, 'abc123'),
  ('post-002', 'effect-ts-intro', 'Effect-TSで始める型安全な非同期処理', 'Effect-TSを使って副作用を型で表現する方法を紹介します。', 'published', '2026-02-01T10:00:00Z', '2026-02-03T12:00:00Z', '# Effect-TS\n\nEffectの基本を紹介します。', 51, 'def456'),
  ('post-003', 'cloudflare-pages-d1', 'Cloudflare Pages + D1でブログを作る', 'Cloudflare PagesとD1を組み合わせてサーバーレスブログを構築する手順を解説します。', 'published', '2026-02-15T08:30:00Z', '2026-02-15T08:30:00Z', '# Cloudflare Pages + D1\n\n構築手順のメモです。', 67, 'ghi789'),
  ('post-004', 'hono-ssr', 'HonoでSSRする', 'HonoのJSXサポートを使ってサーバーサイドレンダリングを実装します。', 'published', '2026-03-05T11:00:00Z', '2026-03-06T09:00:00Z', '# Hono SSR\n\nHonoでSSRする流れを解説します。', 63, 'jkl012'),
  ('post-005', 'wip-draft', 'Draft: 次の記事のメモ', '作成中の下書きです。', 'draft', '2026-04-01T00:00:00Z', '2026-04-05T15:00:00Z', '# Draft\n\n下書き本文。', 26, 'mno345');"

echo "Seeded 5 posts (4 published, 1 draft)."
