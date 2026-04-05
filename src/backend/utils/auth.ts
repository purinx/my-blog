import type { AppContext } from "../../db";

// Temporary fallback for local testing.
const DEFAULT_API_KEY = "temp-api-key";

function getExpectedApiKey(c: AppContext) {
  return c.env.API_KEY ?? DEFAULT_API_KEY;
}

function getProvidedApiKey(c: AppContext) {
  const authHeader = c.req.header("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length);
  }
  return c.req.header("x-api-key");
}

export function requireApiKey(c: AppContext) {
  const expected = getExpectedApiKey(c);
  const provided = getProvidedApiKey(c);
  if (!provided || provided !== expected) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return undefined;
}
