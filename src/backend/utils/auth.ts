import { Effect } from "effect";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import type { AppContext } from "../../db";

// ---- Admin session auth (for admin pages) ----

const SESSION_COOKIE = "session";
const SESSION_DATA = "admin-session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const OAUTH_STATE_COOKIE = "oauth_state";
const OAUTH_STATE_MAX_AGE = 600; // 10 minutes

const DEFAULT_SESSION_SECRET = "temp-session-secret";

function getSessionSecret(c: AppContext): string {
  return c.env.GITHUB_CLIENT_SECRET ?? DEFAULT_SESSION_SECRET;
}

function computeSessionToken(secret: string): Effect.Effect<string> {
  return Effect.promise(async function () {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );
    const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(SESSION_DATA));
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
  });
}

export function setAdminSession(c: AppContext): Effect.Effect<void> {
  return computeSessionToken(getSessionSecret(c)).pipe(
    Effect.map(function (token) {
      setCookie(c, SESSION_COOKIE, token, {
        httpOnly: true,
        sameSite: "Lax",
        path: "/",
        maxAge: SESSION_MAX_AGE,
      });
    }),
  );
}

export function requireAdminSession(c: AppContext): Effect.Effect<Response | undefined> {
  const token = getCookie(c, SESSION_COOKIE);
  if (!token) {
    return Effect.succeed(redirectToLoginPage(c));
  }
  return computeSessionToken(getSessionSecret(c)).pipe(
    Effect.map(function (expected) {
      if (token !== expected) return redirectToLoginPage(c);
      return undefined;
    }),
  );
}

export function clearAdminSession(c: AppContext): void {
  deleteCookie(c, SESSION_COOKIE, { path: "/" });
}

export function setOAuthState(c: AppContext, next: string): string {
  const uuid = crypto.randomUUID();
  const cookieValue = `${uuid}:${encodeURIComponent(next)}`;
  setCookie(c, OAUTH_STATE_COOKIE, cookieValue, {
    httpOnly: true,
    sameSite: "Lax",
    path: "/",
    maxAge: OAUTH_STATE_MAX_AGE,
  });
  return uuid;
}

export function consumeOAuthState(c: AppContext, state: string): string | undefined {
  const stored = getCookie(c, OAUTH_STATE_COOKIE);
  deleteCookie(c, OAUTH_STATE_COOKIE, { path: "/" });
  if (!stored) return undefined;
  const separatorIndex = stored.indexOf(":");
  if (separatorIndex === -1) return undefined;
  const uuid = stored.slice(0, separatorIndex);
  if (uuid !== state) return undefined;
  const next = decodeURIComponent(stored.slice(separatorIndex + 1));
  return safeNextPath(next);
}

export function safeNextPath(value: string | undefined | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/posts/new";
  }
  return value;
}

function redirectToLoginPage(c: AppContext): Response {
  const next = encodeURIComponent(new URL(c.req.url).pathname);
  return c.redirect(`/login?next=${next}`, 302) as Response;
}
