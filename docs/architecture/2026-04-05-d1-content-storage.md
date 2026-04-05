# D1 でブログ本文とメタ情報を統合保存する設計

## 概要

- 記事本文（Markdown）とメタ情報を `posts` テーブルに集約する
- 外部ストレージ（R2）への依存をなくし、読み書き経路を単純化する

## テーブル定義

```sql
CREATE TABLE posts (
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
```

## 取得フロー

1. `slug` と `status` で記事を検索
2. 同じクエリ結果から `content` を取り出して Markdown 描画
3. `content_hash` を ETag として応答ヘッダに設定

## 更新フロー

1. `content` を含めて D1 の同一レコードを更新
2. `content_length` / `content_hash` を再計算して保存
3. 外部ストレージ同期処理は不要
