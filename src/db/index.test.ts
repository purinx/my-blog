import { describe, expect, it } from "vitest";
import { getDb } from "./index";

describe("getDb", function () {
  it("returns DB binding from context env", function () {
    const db = { prepare: function () {} } as unknown as D1Database;
    const context = {
      env: {
        DB: db,
      },
    } as unknown as Parameters<typeof getDb>[0];

    expect(getDb(context)).toBe(db);
  });
});
