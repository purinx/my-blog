import { Effect } from "effect";
import { Hono } from "hono";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Bindings } from "../../db";

vi.mock("../utils/auth", function () {
  return {
    requireAdminSession: vi.fn(),
    setAdminSession: vi.fn(),
    clearAdminSession: vi.fn(),
    setOAuthState: vi.fn(),
    consumeOAuthState: vi.fn(),
    safeNextPath: vi.fn((v: string | null | undefined) => {
      if (!v || !v.startsWith("/") || v.startsWith("//")) return "/posts/new";
      return v;
    }),
  };
});

vi.mock("../utils/error-log", function () {
  return {
    logServerError: vi.fn(function () {
      return "deadbeef";
    }),
  };
});

import {
  clearAdminSession,
  consumeOAuthState,
  requireAdminSession,
  setAdminSession,
  setOAuthState,
} from "../utils/auth";
import { getLoginPage, githubCallback, logout, redirectToGitHub } from "./auth-controller";

const env = {
  DB: {} as D1Database,
  GITHUB_CLIENT_ID: "test-client-id",
  GITHUB_CLIENT_SECRET: "test-client-secret",
};

function createApp() {
  const app = new Hono<{ Bindings: Bindings }>();
  app.get("/login", getLoginPage);
  app.get("/login/github", redirectToGitHub);
  app.get("/auth/callback", githubCallback);
  app.post("/logout", logout);
  return app;
}

beforeEach(function () {
  vi.clearAllMocks();
});

afterEach(function () {
  vi.restoreAllMocks();
});

describe("getLoginPage", function () {
  it("renders the login page when not authenticated", async function () {
    vi.mocked(requireAdminSession).mockReturnValue(
      Effect.succeed(new Response(null, { status: 302, headers: { location: "/login" } })),
    );

    const res = await createApp().request("http://localhost/login", {}, env);
    expect(res.status).toBe(200);
    const body = await res.text();
    expect(body).toContain("GitHub でログイン");
  });

  it("redirects to /posts/new when already authenticated", async function () {
    vi.mocked(requireAdminSession).mockReturnValue(Effect.succeed(undefined));

    const res = await createApp().request("http://localhost/login", {}, env);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/posts/new");
  });

  it("passes error=forbidden to the login page", async function () {
    vi.mocked(requireAdminSession).mockReturnValue(
      Effect.succeed(new Response(null, { status: 302, headers: { location: "/login" } })),
    );

    const res = await createApp().request("http://localhost/login?error=forbidden", {}, env);
    expect(res.status).toBe(200);
    const body = await res.text();
    expect(body).toContain("アクセスが許可されていません");
  });
});

describe("redirectToGitHub", function () {
  it("redirects to GitHub OAuth with correct params", async function () {
    vi.mocked(setOAuthState).mockReturnValue("test-uuid");

    const res = await createApp().request("http://localhost/login/github", {}, env);
    expect(res.status).toBe(302);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("github.com/login/oauth/authorize");
    expect(location).toContain("client_id=test-client-id");
    expect(location).toContain("state=test-uuid");
    expect(location).toContain("scope=read%3Auser");
  });

  it("sets the oauth_state cookie", async function () {
    vi.mocked(setOAuthState).mockReturnValue("test-uuid");

    await createApp().request("http://localhost/login/github", {}, env);
    expect(setOAuthState).toHaveBeenCalledTimes(1);
  });
});

describe("githubCallback", function () {
  it("redirects to /login?error=invalid when code is missing", async function () {
    vi.mocked(consumeOAuthState).mockReturnValue("/posts/new");

    const res = await createApp().request("http://localhost/auth/callback?state=uuid", {}, env);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("error=invalid");
  });

  it("redirects to /login?error=invalid when state is invalid", async function () {
    vi.mocked(consumeOAuthState).mockReturnValue(undefined);

    const res = await createApp().request(
      "http://localhost/auth/callback?code=code&state=bad-state",
      {},
      env,
    );
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("error=invalid");
  });

  it("sets session and redirects on successful GitHub login for purinx", async function () {
    vi.mocked(consumeOAuthState).mockReturnValue("/posts/new");
    vi.mocked(setAdminSession).mockReturnValue(Effect.succeed(undefined));

    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(
          new Response(JSON.stringify({ access_token: "gh-token" }), {
            headers: { "content-type": "application/json" },
          }),
        )
        .mockResolvedValueOnce(
          new Response(JSON.stringify({ login: "purinx" }), {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
        ),
    );

    const res = await createApp().request(
      "http://localhost/auth/callback?code=github-code&state=valid-uuid",
      {},
      env,
    );
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/posts/new");
    expect(setAdminSession).toHaveBeenCalledTimes(1);

    vi.unstubAllGlobals();
  });

  it("redirects to /login?error=forbidden when GitHub user is not purinx", async function () {
    vi.mocked(consumeOAuthState).mockReturnValue("/posts/new");

    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(
          new Response(JSON.stringify({ access_token: "gh-token" }), {
            headers: { "content-type": "application/json" },
          }),
        )
        .mockResolvedValueOnce(
          new Response(JSON.stringify({ login: "other-user" }), {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
        ),
    );

    const res = await createApp().request(
      "http://localhost/auth/callback?code=github-code&state=valid-uuid",
      {},
      env,
    );
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("error=forbidden");
    expect(setAdminSession).not.toHaveBeenCalled();

    vi.unstubAllGlobals();
  });

  it("redirects to /login?error=invalid when GitHub API fails", async function () {
    vi.mocked(consumeOAuthState).mockReturnValue("/posts/new");

    vi.stubGlobal("fetch", vi.fn().mockRejectedValueOnce(new Error("network error")));

    const res = await createApp().request(
      "http://localhost/auth/callback?code=github-code&state=valid-uuid",
      {},
      env,
    );
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("error=invalid");

    vi.unstubAllGlobals();
  });
});

describe("logout", function () {
  it("clears the session and redirects to /", async function () {
    const res = await createApp().request("http://localhost/logout", { method: "POST" }, env);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/");
    expect(clearAdminSession).toHaveBeenCalledTimes(1);
  });
});
