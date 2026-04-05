import { Hono } from "hono";
import * as v from "valibot";
import type { Bindings } from "../../db";
import { getDb, getPostsBucket } from "../../db";
import {
  createPost,
  deletePost,
  getPostWithContent,
  listPosts,
  updatePost,
} from "../repositories/post-repository";

const NonEmptyString = v.pipe(v.string(), v.minLength(1));
const PostStatus = v.picklist(["draft", "published"]);

const CreatePostSchema = v.object({
  slug: NonEmptyString,
  title: NonEmptyString,
  excerpt: NonEmptyString,
  content: NonEmptyString,
  status: v.optional(PostStatus),
  publishedAt: v.optional(NonEmptyString),
});

const UpdatePostSchema = v.object({
  title: v.optional(NonEmptyString),
  excerpt: v.optional(NonEmptyString),
  content: v.optional(NonEmptyString),
  status: v.optional(PostStatus),
  publishedAt: v.optional(NonEmptyString),
});

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
  const parsed = v.safeParse(CreatePostSchema, body);
  if (!parsed.success) {
    return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
  }

  const { slug, title, excerpt, content, status, publishedAt } = parsed.output;

  try {
    const result = await createPost(getDb(c), getPostsBucket(c), {
      slug,
      title,
      excerpt,
      content,
      status,
      publishedAt,
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
  const parsed = v.safeParse(UpdatePostSchema, body);
  if (!parsed.success) {
    return c.json({ error: "Invalid request body", issues: parsed.issues }, 400);
  }

  try {
    const result = await updatePost(getDb(c), getPostsBucket(c), slug, parsed.output);

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
