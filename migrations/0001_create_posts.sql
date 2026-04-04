CREATE TABLE IF NOT EXISTS posts (
  id          TEXT PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  title       TEXT NOT NULL,
  excerpt     TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'draft',
  published_at TEXT NOT NULL,
  updated_at  TEXT NOT NULL,
  content_key  TEXT NOT NULL,
  content_type TEXT NOT NULL,
  content_length INTEGER,
  content_hash   TEXT
);

CREATE INDEX IF NOT EXISTS idx_posts_slug   ON posts (slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts (status, published_at DESC);
