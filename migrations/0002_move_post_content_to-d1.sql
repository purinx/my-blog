CREATE TABLE posts_new (
  id            TEXT PRIMARY KEY,
  slug          TEXT NOT NULL UNIQUE,
  title         TEXT NOT NULL,
  excerpt       TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'draft',
  published_at  TEXT NOT NULL,
  updated_at    TEXT NOT NULL,
  content       TEXT NOT NULL DEFAULT '',
  content_length INTEGER,
  content_hash  TEXT
);

INSERT INTO posts_new (
  id, slug, title, excerpt, status, published_at, updated_at, content, content_length, content_hash
)
SELECT
  id,
  slug,
  title,
  excerpt,
  status,
  published_at,
  updated_at,
  '',
  content_length,
  content_hash
FROM posts;

DROP TABLE posts;
ALTER TABLE posts_new RENAME TO posts;

CREATE INDEX idx_posts_slug ON posts (slug);
CREATE INDEX idx_posts_status ON posts (status, published_at DESC);
