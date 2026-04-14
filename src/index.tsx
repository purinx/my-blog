import { Hono } from "hono";
import { logger } from "hono/logger";
import type { Next } from "hono";
import { getHomePage } from "./backend/controllers/index-controller";
import {
  getPostBodyEditorPage,
  getPostNewPage,
  getPostPage,
  updatePostBody,
} from "./backend/controllers/posts-controller";
import { postsApiController } from "./backend/controllers/api/posts-controller";
import {
  devBypassLogin,
  getLoginPage,
  githubCallback,
  logout,
  redirectToGitHub,
} from "./backend/controllers/auth-controller";
import { requireAdminSession } from "./backend/utils/auth";
import { ErrorPage } from "./components/Error";
import { type AppContext, type Bindings } from "./db";
import { Effect } from "effect";

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());

app.use("/api/*", async function (c, next) {
  const redirect = await Effect.runPromise(requireAdminSession(c as AppContext));
  if (redirect) return redirect;
  return next();
});

async function requireSession(c: AppContext, next: Next) {
  const redirect = await Effect.runPromise(requireAdminSession(c));
  if (redirect) return redirect;
  return next();
}

app.route("/api/posts", postsApiController);

app.get("/login", getLoginPage);
app.get("/login/github", redirectToGitHub);
app.post("/login/dev-bypass", devBypassLogin);
app.get("/auth/callback", githubCallback);
app.post("/logout", logout);

app.get("/", getHomePage);

app.use("/posts/new", requireSession);
app.get("/posts/new", getPostNewPage);

app.get("/posts/:slug", getPostPage);

app.use("/posts/:slug/edit", requireSession);
app.get("/posts/:slug/edit", getPostBodyEditorPage);
app.post("/posts/:slug/edit", updatePostBody);

app.notFound(function (c) {
  return c.html(
    <ErrorPage statusCode={404} description="ページが見つかりませんでした。" showHomeLink />,
    404,
  );
});

export default app;
