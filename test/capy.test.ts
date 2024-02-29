import { describe, expect, test } from "bun:test";
import { fetchGif } from "../src/main.tsx";

describe("fetchGif", () => {
  test("API key exists", () => {
    expect("GIPHY_API_KEY" in process.env).toBe(true);
    expect(typeof process.env["GIPHY_API_KEY"]).toBe("string");
  });

  test("getGif returns a valid URL", async () => {
    const gifUrl = await fetchGif("capybara");
    expect(gifUrl).toMatch(/^(http|https):\/\/[^ "]+$/);
  });
});
