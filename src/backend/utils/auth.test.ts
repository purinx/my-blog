import { Effect } from "effect";
import { Hono } from "hono";
import { describe, expect, it } from "vitest";
import type { AppContext, Bindings } from "../../db";
import {
  clearAdminSession,
  consumeOAuthState,
  requireAdminSession,
  safeNextPath,
  setAdminSession,
  setOAuthState,
} from "./auth";

// ---- Admin session tests ----

type SessionEnv = { Bindings: Bindings };

function createSessionApp() {
  const app = new Hono<SessionEnv>();

  app.get("/set-session", async function (c) {
    await Effect.runPromise(setAdminSession(c as unknown as AppContext));
    return c.text("set");
  });

  app.get("/clear-session", function (c) {
    clearAdminSession(c as unknown as AppContext);
    return c.text("cleared");
  });

  app.get("/protected", async function (c) {
    const redirect = await Effect.runPromise(requireAdminSession(c as unknown as AppContext));
    if (redirect) return redirect;
    return c.text("ok");
  });

  app.get("/set-state", function (c) {
    const next = c.req.query("next") ?? "/posts/new";
    const uuid = setOAuthState(c as unknown as AppContext, next);
    return c.text(uuid);
  });

  app.get("/consume-state", function (c) {
    const state = c.req.query("state") ?? "";
    const next = consumeOAuthState(c as unknown as AppContext, state);
    return c.text(next ?? "invalid");
  });

  return app;
}

const sessionEnv = { DB: {} as D1Database, GITHUB_CLIENT_SECRET: "test-secret" };

describe("setAdminSession / requireAdminSession", function () {
  it("redirects to login when no session cookie is present", async function () {
    const app = createSessionApp();
    const res = await app.request("http://localhost/protected", {}, sessionEnv);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("/login");
  });

  it("redirects to login with next param set to the current path", async function () {
    const app = createSessionApp();
    const res = await app.request("http://localhost/protected", {}, sessionEnv);
    expect(res.headers.get("location")).toContain("next=%2Fprotected");
  });

  it("redirects to login when session cookie is invalid", async function () {
    const app = createSessionApp();
    const res = await app.request(
      "http://localhost/protected",
      { headers: { Cookie: "session=invalid-token" } },
      sessionEnv,
    );
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("/login");
  });

  it("allows access when a valid session cookie is present", async function () {
    const app = createSessionApp();

    const setRes = await app.request("http://localhost/set-session", {}, sessionEnv);
    expect(setRes.status).toBe(200);
    const setCookieHeader = setRes.headers.get("set-cookie") ?? "";
    const match = setCookieHeader.match(/session=([^;]+)/);
    const sessionValue = match?.[1];
    expect(sessionValue).toBeTruthy();

    const protectedRes = await app.request(
      "http://localhost/protected",
      { headers: { Cookie: `session=${sessionValue}` } },
      sessionEnv,
    );
    expect(protectedRes.status).toBe(200);
    expect(await protectedRes.text()).toBe("ok");
  });

  it("rejects session cookie signed with a different secret", async function () {
    const appA = createSessionApp();
    const appB = createSessionApp();

    const setRes = await appA.request(
      "http://localhost/set-session",
      {},
      {
        DB: {} as D1Database,
        GITHUB_CLIENT_SECRET: "secret-a",
      },
    );
    const setCookieHeader = setRes.headers.get("set-cookie") ?? "";
    const match = setCookieHeader.match(/session=([^;]+)/);
    const sessionValue = match?.[1];

    const protectedRes = await appB.request(
      "http://localhost/protected",
      { headers: { Cookie: `session=${sessionValue}` } },
      { DB: {} as D1Database, GITHUB_CLIENT_SECRET: "secret-b" },
    );
    expect(protectedRes.status).toBe(302);
  });

  it("clearAdminSession removes the session cookie", async function () {
    const app = createSessionApp();
    const res = await app.request("http://localhost/clear-session", {}, sessionEnv);
    expect(res.status).toBe(200);
    const setCookieHeader = res.headers.get("set-cookie") ?? "";
    expect(setCookieHeader).toContain("session=;");
  });
});

describe("setOAuthState / consumeOAuthState", function () {
  it("returns the next path when state is valid", async function () {
    const app = createSessionApp();

    const stateRes = await app.request(
      "http://localhost/set-state?next=%2Fposts%2Fnew",
      {},
      sessionEnv,
    );
    const uuid = await stateRes.text();
    const stateCookie = stateRes.headers.get("set-cookie") ?? "";
    const match = stateCookie.match(/oauth_state=([^;]+)/);
    const oauthStateCookieValue = match?.[1];

    const consumeRes = await app.request(
      `http://localhost/consume-state?state=${uuid}`,
      { headers: { Cookie: `oauth_state=${oauthStateCookieValue}` } },
      sessionEnv,
    );
    expect(await consumeRes.text()).toBe("/posts/new");
  });

  it("returns undefined when state does not match", async function () {
    const app = createSessionApp();

    const stateRes = await app.request(
      "http://localhost/set-state?next=%2Fposts%2Fnew",
      {},
      sessionEnv,
    );
    const stateCookie = stateRes.headers.get("set-cookie") ?? "";
    const match = stateCookie.match(/oauth_state=([^;]+)/);
    const oauthStateCookieValue = match?.[1];

    const consumeRes = await app.request(
      "http://localhost/consume-state?state=wrong-uuid",
      { headers: { Cookie: `oauth_state=${oauthStateCookieValue}` } },
      sessionEnv,
    );
    expect(await consumeRes.text()).toBe("invalid");
  });

  it("returns undefined when no state cookie exists", async function () {
    const app = createSessionApp();
    const consumeRes = await app.request(
      "http://localhost/consume-state?state=any-uuid",
      {},
      sessionEnv,
    );
    expect(await consumeRes.text()).toBe("invalid");
  });
});

describe("safeNextPath", function () {
  it("returns the path when it starts with /", function () {
    expect(safeNextPath("/posts/new")).toBe("/posts/new");
  });

  it("returns default when value is undefined", function () {
    expect(safeNextPath(undefined)).toBe("/posts/new");
  });

  it("returns default when value is empty string", function () {
    expect(safeNextPath("")).toBe("/posts/new");
  });

  it("returns default when value does not start with /", function () {
    expect(safeNextPath("http://evil.com")).toBe("/posts/new");
  });

  it("returns default when value starts with //", function () {
    expect(safeNextPath("//evil.com")).toBe("/posts/new");
  });
});
