import { uniqueInOrder } from "./unique-order";

describe("When putting unique letters in order", () => {
  it("should return nothing for an empty string", () => {
    const result = uniqueInOrder("");
    const expected = [];

    expect(result).toEqual(expected);
  });
  it("should return ABC for ABC", () => {
    const result = uniqueInOrder("ABC");
    const expected = ["A", "B", "C"];

    expect(result).toEqual(expected);
  });
  it("should return ABC for AABCC", () => {
    const result = uniqueInOrder("AABCC");
    const expected = ["A", "B", "C"];

    expect(result).toEqual(expected);
  });
  it("should return ABCA for ABBCAA", () => {
    const result = uniqueInOrder("ABBCAA");
    const expected = ["A", "B", "C", "A"];

    expect(result).toEqual(expected);
  });
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  // Suggested test: testing duplicated letters "AABBCCCC"
});
