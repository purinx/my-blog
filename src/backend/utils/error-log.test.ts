import { afterEach, describe, expect, it, vi } from "vitest";
import { logServerError } from "./error-log";

afterEach(function () {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("logServerError", function () {
  it("returns hash errorId and logs it as structured JSON", function () {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00.000Z"));
    vi.spyOn(crypto, "randomUUID").mockReturnValue("00000000-0000-0000-0000-000000000000");
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(function () {});

    const errorId = logServerError({
      route: "/posts/hello",
      method: "GET",
      statusCode: 500,
      cause: new Error("boom"),
    });

    expect(errorId).toMatch(/^[0-9a-f]{8}$/);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);

    const rawLog = consoleErrorSpy.mock.calls[0]?.[0];
    const payload = JSON.parse(String(rawLog)) as {
      level: string;
      errorId: string;
      route: string;
      method: string;
      statusCode: number;
      timestamp: string;
      cause: string;
    };

    expect(payload.level).toBe("error");
    expect(payload.errorId).toBe(errorId);
    expect(payload.route).toBe("/posts/hello");
    expect(payload.method).toBe("GET");
    expect(payload.statusCode).toBe(500);
    expect(payload.timestamp).toBe("2026-01-01T00:00:00.000Z");
    expect(payload.cause).toContain("Error: boom");
  });
});
