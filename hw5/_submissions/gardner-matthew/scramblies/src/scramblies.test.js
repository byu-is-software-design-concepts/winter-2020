import { scramble } from "./scramblies";

describe("When validating scrambled words", () => {
  it("should return true for an empty string", () => {
    const result = scramble("", "");
    const expected = true;

    expect(result).toEqual(expected);
  });
  it("should return true for 'orldw' and 'world'", () => {
    const result = scramble("orldw", "world");
    const expected = true;
  });
  it("should return true for 'rkqodlw' and 'world'", () => {
    const result = scramble("rkqodlw", "world");
    const expected = true;
  });
});
