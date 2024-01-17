import { describe, expect, test, beforeAll } from "bun:test";
import { getGif } from "../src/getGif";

beforeAll(() => {
  // setup tests
});

describe("getGifs", () => {
  test("API key exists", () => {
    expect('GIPHY_API_KEY' in process.env).toBe(true);
    expect(typeof process.env['GIPHY_API_KEY']).toBe('string');
  });

  test("getGif returns a valid URL", async () => {
    const gifUrl = await getGif(process.env['GIPHY_API_KEY']);
    expect(gifUrl).toMatch(/^(http|https):\/\/[^ "]+$/);
  });
  
  // test("This will always fail", async () => {
  //   expect(true).toBe(false);
  // });
});

