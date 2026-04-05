import { Hono } from "hono";
import type { Bindings } from "../../db";
import { getDb, getPostsBucket } from "../../db";
import {
  createPost,
  deletePost,
  getPostWithContent,
  listPosts,
  updatePost,
} from "../repositories/post-repository";
import { asRecord, isNonEmptyString } from "../utils/validation";

const postsController = new Hono<{ Bindings: Bindings }>();

postsController.get("/", async (c) => {
  try {
    const posts = await listPosts(getDb(c));
    return c.json({ posts });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch posts" }, 500);
  }
});

postsController.get("/:slug", async (c) => {
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

postsController.post("/", async (c) => {
  const body = await c.req.json().catch(() => null);
  const data = asRecord(body);
  if (!data) {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  const { slug, title, excerpt, content, status, publishedAt } = data;

  if (
    !isNonEmptyString(slug) ||
    !isNonEmptyString(title) ||
    !isNonEmptyString(excerpt) ||
    !isNonEmptyString(content)
  ) {
    return c.json({ error: "slug, title, excerpt, content are required" }, 400);
  }

  try {
    const result = await createPost(getDb(c), getPostsBucket(c), {
      slug,
      title,
      excerpt,
      content,
      status: status === "draft" || status === "published" ? status : undefined,
      publishedAt: isNonEmptyString(publishedAt) ? publishedAt : undefined,
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

postsController.put("/:slug", async (c) => {
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
    if (data.status === "draft" || data.status === "published") input.status = data.status;
    if (isNonEmptyString(data.publishedAt)) input.publishedAt = data.publishedAt;

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

postsController.delete("/:slug", async (c) => {
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

export { postsController };
