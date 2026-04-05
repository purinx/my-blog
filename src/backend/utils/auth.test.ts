import { describe, expect, it } from "vitest";
import type { AppContext } from "../../db";
import { requireApiKey } from "./auth";

type ContextOptions = {
  apiKey?: string;
  headers?: Record<string, string>;
};

function createContext(options: ContextOptions = {}): AppContext {
  const headers = new Headers(options.headers);
  return {
    env: {
      DB: {} as D1Database,
      API_KEY: options.apiKey,
    },
    req: {
      header: function (name: string) {
        const value = headers.get(name);
        return value ?? undefined;
      },
    },
    json: function (body: unknown, status?: number) {
      return new Response(JSON.stringify(body), {
        status,
        headers: {
          "content-type": "application/json",
        },
      });
    },
  } as unknown as AppContext;
}

async function parseJson(response: Response): Promise<unknown> {
  return response.json();
}

describe("requireApiKey", function () {
  it("accepts Bearer token when it matches API_KEY", function () {
    const context = createContext({
      apiKey: "secret",
      headers: {
        authorization: "Bearer secret",
      },
    });

    const response = requireApiKey(context);
    expect(response).toBeUndefined();
  });

  it("accepts x-api-key header when it matches API_KEY", function () {
    const context = createContext({
      apiKey: "secret",
      headers: {
        "x-api-key": "secret",
      },
    });

    const response = requireApiKey(context);
    expect(response).toBeUndefined();
  });

  it("uses fallback API key when API_KEY binding is missing", function () {
    const context = createContext({
      headers: {
        "x-api-key": "temp-api-key",
      },
    });

    const response = requireApiKey(context);
    expect(response).toBeUndefined();
  });

  it("returns 401 when key is missing", async function () {
    const context = createContext({
      apiKey: "secret",
    });

    const response = requireApiKey(context);
    expect(response).toBeInstanceOf(Response);
    expect(response?.status).toBe(401);
    expect(await parseJson(response as Response)).toEqual({ error: "Unauthorized" });
  });

  it("returns 401 when key does not match", async function () {
    const context = createContext({
      apiKey: "secret",
      headers: {
        authorization: "Bearer wrong",
      },
    });

    const response = requireApiKey(context);
    expect(response).toBeInstanceOf(Response);
    expect(response?.status).toBe(401);
    expect(await parseJson(response as Response)).toEqual({ error: "Unauthorized" });
  });
});
