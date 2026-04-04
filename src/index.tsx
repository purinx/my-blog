import { Hono } from "hono";
import { css } from "hono/css";
import {
  createPost,
  deletePost,
  getPostWithContent,
  getPublishedPostWithContent,
  listPosts,
  listPublishedPosts,
  updatePost,
} from "./backend/repositories/postRepository";
import Layout from "./components/Layout";
import PostCard from "./components/PostCard";
import PostDetail from "./components/PostDetail";
import { type AppContext, type Bindings, getDb, getPostsBucket } from "./db";
import { renderMarkdown } from "./utils/markdown";

const app = new Hono<{ Bindings: Bindings }>();

// Temporary fallback for local testing.
const DEFAULT_API_KEY = "temp-api-key";

const getExpectedApiKey = (c: AppContext) => c.env.API_KEY ?? DEFAULT_API_KEY;

const getProvidedApiKey = (c: AppContext) => {
  const authHeader = c.req.header("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length);
  }
  return c.req.header("x-api-key");
};

const requireApiKey = (c: AppContext) => {
  const expected = getExpectedApiKey(c);
  const provided = getProvidedApiKey(c);
  if (!provided || provided !== expected) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return undefined;
};

const asRecord = (value: unknown) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;


app.use("/api/*", async (c, next) => {
  const unauthorized = requireApiKey(c);
  if (unauthorized) return unauthorized;
  await next();
});

// ホームページ
app.get("/", async (c) => {
  try {
    const posts = await listPublishedPosts(getDb(c));

    const titleStyle = css`
      margin-bottom: 2rem;
    `;
    c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
    return c.html(
      <Layout>
        <h1 class={titleStyle}>Recent Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Layout>,
    );
  } catch (error) {
    console.error(error);
    return c.html(
      <Layout>
        <h1>500 - Internal Server Error</h1>
        <p>記事の取得に失敗しました。</p>
      </Layout>,
      500,
    );
  }
});

// 記事ページ
app.get("/posts/:slug", async (c) => {
  const slug = c.req.param("slug");
  try {
    const result = await getPublishedPostWithContent(getDb(c), getPostsBucket(c), slug);

    if (!result) {
      return c.html(
        <Layout>
          <h1>404 - Post Not Found</h1>
          <p>
            <a href="/">ホームに戻る</a>
          </p>
        </Layout>,
        404,
      );
    }

    if (!result.content) {
      return c.html(
        <Layout>
          <h1>404 - Post Not Found</h1>
          <p>
            <a href="/">ホームに戻る</a>
          </p>
        </Layout>,
        404,
      );
    }

    if (result.etag) {
      c.header("ETag", result.etag);
    } else if (result.post.contentHash) {
      c.header("ETag", result.post.contentHash);
    }
    c.header("Cache-Control", "public, max-age=60, stale-while-revalidate=300");

    const { html: contentHtml, toc } = await renderMarkdown(result.content);

    return c.html(
      <PostDetail post={result.post} contentHtml={contentHtml} toc={toc} />,
    );
  } catch (error) {
    console.error(error);
    return c.html(
      <Layout>
        <h1>500 - Internal Server Error</h1>
        <p>記事の取得に失敗しました。</p>
      </Layout>,
      500,
    );
  }
});

// 管理API: 記事一覧
app.get("/api/posts", async (c) => {
  try {
    const posts = await listPosts(getDb(c));
    return c.json({ posts });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch posts" }, 500);
  }
});

// 管理API: 記事取得
app.get("/api/posts/:slug", async (c) => {
  const slug = c.req.param("slug");
  try {
    const result = await getPostWithContent(getDb(c), getPostsBucket(c), slug);

    if (!result) {
      return c.json({ error: "Post not found" }, 404);
    }

    if (!result.content) {
      return c.json({ error: "Post content missing" }, 404);
    }

    return c.json({ post: { ...result.post, content: result.content } });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch post" }, 500);
  }
});

// 管理API: 記事作成
app.post("/api/posts", async (c) => {
  const body = await c.req.json().catch(() => null);
  const data = asRecord(body);
  if (!data) {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  const slug = data.slug;
  const title = data.title;
  const excerpt = data.excerpt;
  const content = data.content;
  const status = data.status;
  const publishedAt = data.publishedAt;

  if (
    !isNonEmptyString(slug) ||
    !isNonEmptyString(title) ||
    !isNonEmptyString(excerpt) ||
    !isNonEmptyString(content)
  ) {
    return c.json({ error: "slug, title, excerpt, content are required" }, 400);
  }

  try {
    const normalizedStatus = status === "draft" || status === "published" ? status : undefined;
    const normalizedPublishedAt = isNonEmptyString(publishedAt) ? publishedAt : undefined;

    const result = await createPost(getDb(c), getPostsBucket(c), {
      slug,
      title,
      excerpt,
      content,
      status: normalizedStatus,
      publishedAt: normalizedPublishedAt,
    });

    if (!result.ok) {
      return c.json({ error: "Slug already exists" }, 409);
    }

    return c.json({ post: result.post }, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create post" }, 500);
  }
});

// 管理API: 記事更新
app.put("/api/posts/:slug", async (c) => {
  const slug = c.req.param("slug");
  const body = await c.req.json().catch(() => null);
  const data = asRecord(body);
  if (!data) {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  try {
    const input: {
      title?: string;
      excerpt?: string;
      content?: string;
      status?: "draft" | "published";
      publishedAt?: string;
    } = {};

    if (isNonEmptyString(data.title)) input.title = data.title;
    if (isNonEmptyString(data.excerpt)) input.excerpt = data.excerpt;
    if (isNonEmptyString(data.content)) input.content = data.content;
    if (data.status === "draft" || data.status === "published") {
      input.status = data.status;
    }
    if (isNonEmptyString(data.publishedAt)) {
      input.publishedAt = data.publishedAt;
    }

    const result = await updatePost(getDb(c), getPostsBucket(c), slug, input);

    if (!result.ok) {
      return c.json({ error: "Post not found" }, 404);
    }

    return c.json({ post: result.post });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to update post" }, 500);
  }
});

// 管理API: 記事削除
app.delete("/api/posts/:slug", async (c) => {
  const slug = c.req.param("slug");
  try {
    const result = await deletePost(getDb(c), getPostsBucket(c), slug);
    if (!result.ok) {
      return c.json({ error: "Post not found" }, 404);
    }

    return c.json({ deleted: true });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to delete post" }, 500);
  }
});

export default app;
