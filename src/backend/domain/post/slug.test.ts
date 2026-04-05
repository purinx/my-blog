import { describe, expect, it } from "vitest";
import { Slug } from "./slug";

describe("Slug", function () {
  it("wraps string value as value object", function () {
    const slug = new Slug({ value: "my-first-post" });

    expect(slug.value).toBe("my-first-post");
  });
});
