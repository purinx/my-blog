import { Hono } from "hono";
import { logger } from "hono/logger";
import { getHomePage } from "./backend/controllers/index-controller";
import {
  createNewPost,
  getPostBodyEditorPage,
  getPostNewPage,
  getPostPage,
  updatePostBody,
} from "./backend/controllers/posts-controller";
import { postsApiController } from "./backend/controllers/api/posts-controller";
import { requireApiKey } from "./backend/utils/auth";
import { ErrorPage } from "./components/Error";
import { type AppContext, type Bindings } from "./db";

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());
app.use("/api/*", async function (c, next) {
  const unauthorized = requireApiKey(c as AppContext);
  if (unauthorized) {
    return unauthorized;
  }

  return next();
});

app.route("/api/posts", postsApiController);

app.get("/", getHomePage);

app.get("/posts/new", getPostNewPage);
app.post("/posts/new", createNewPost);
app.get("/posts/:slug", getPostPage);
app.get("/posts/:slug/edit", getPostBodyEditorPage);
app.post("/posts/:slug/edit", updatePostBody);

app.notFound(function (c) {
  return c.html(
    <ErrorPage statusCode={404} description="ページが見つかりませんでした。" showHomeLink />,
    404,
  );
});

export default app;
