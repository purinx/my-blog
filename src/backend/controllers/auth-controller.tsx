import { Effect } from "effect";
import { LoginPage } from "../../components/login";
import type { AppContext } from "../../db";
import { logServerError } from "../utils/error-log";
import {
  clearAdminSession,
  consumeOAuthState,
  requireAdminSession,
  safeNextPath,
  setAdminSession,
  setOAuthState,
} from "../utils/auth";

const ALLOWED_GITHUB_LOGIN = "purinx";

type GitHubTokenResponse = {
  access_token?: string;
  error?: string;
};

type GitHubUser = {
  login: string;
};

function fetchGitHubToken(
  code: string,
  clientId: string,
  clientSecret: string,
): Effect.Effect<string, Error> {
  return Effect.tryPromise({
    try: async function () {
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
      });
      const data = (await res.json()) as GitHubTokenResponse;
      if (data.error || !data.access_token) {
        throw new Error(data.error ?? "Missing access token");
      }
      return data.access_token;
    },
    catch: function (e) {
      return e instanceof Error ? e : new Error(String(e));
    },
  });
}

function fetchGitHubUser(accessToken: string): Effect.Effect<GitHubUser, Error> {
  return Effect.tryPromise({
    try: async function () {
      const res = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
          "User-Agent": "my-blog",
        },
      });
      if (!res.ok) throw new Error("Failed to fetch GitHub user");
      return res.json() as Promise<GitHubUser>;
    },
    catch: function (e) {
      return e instanceof Error ? e : new Error(String(e));
    },
  });
}

export function getLoginPage(c: AppContext) {
  return Effect.runPromise(
    requireAdminSession(c).pipe(
      Effect.map(function (redirect) {
        if (!redirect) {
          return c.redirect("/posts/new", 302);
        }
        const error = c.req.query("error") ?? undefined;
        const next = safeNextPath(c.req.query("next"));
        return c.html(<LoginPage error={error} next={next} />);
      }),
    ),
  );
}

export function redirectToGitHub(c: AppContext) {
  const next = safeNextPath(c.req.query("next"));
  const state = setOAuthState(c, next);
  const redirectUri = `${new URL(c.req.url).origin}/auth/callback`;
  const params = new URLSearchParams({
    client_id: c.env.GITHUB_CLIENT_ID ?? "",
    redirect_uri: redirectUri,
    scope: "read:user",
    state,
  });
  return c.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
}

export function githubCallback(c: AppContext) {
  const code = c.req.query("code");
  const state = c.req.query("state");

  if (!code || !state) {
    return c.redirect("/login?error=invalid", 302);
  }

  const next = consumeOAuthState(c, state);
  if (!next) {
    return c.redirect("/login?error=invalid", 302);
  }

  const clientId = c.env.GITHUB_CLIENT_ID ?? "";
  const clientSecret = c.env.GITHUB_CLIENT_SECRET ?? "";

  return Effect.runPromise(
    fetchGitHubToken(code, clientId, clientSecret).pipe(
      Effect.flatMap(function (token) {
        return fetchGitHubUser(token);
      }),
      Effect.flatMap(function (user) {
        if (user.login !== ALLOWED_GITHUB_LOGIN) {
          return Effect.succeed(c.redirect("/login?error=forbidden", 302));
        }
        return setAdminSession(c).pipe(
          Effect.map(function () {
            return c.redirect(next, 302);
          }),
        );
      }),
      Effect.catchAllCause(function (cause) {
        logServerError({
          route: c.req.path,
          method: c.req.method,
          statusCode: 500,
          cause,
        });
        return Effect.succeed(c.redirect("/login?error=invalid", 302));
      }),
    ),
  );
}

export function logout(c: AppContext) {
  clearAdminSession(c);
  return c.redirect("/", 302);
}
