import { Data } from "effect";

export type PostStatus = "draft" | "published";

export class PostSummary extends Data.Class<{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}> {}

export class Post extends Data.Class<{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: PostStatus;
  publishedAt: string;
  updatedAt: string;
  contentLength: number | null;
  contentHash: string | null;
}> {}

export type PostWithContent = {
  post: Post;
  content: string;
  etag: string | null;
};

export class PostNotFoundError extends Data.TaggedError("PostNotFoundError")<{
  slug: string;
}> {}

export class SlugConflictError extends Data.TaggedError("SlugConflictError")<{
  slug: string;
}> {}
