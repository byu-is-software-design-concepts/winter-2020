import { spinWords } from "./spinning";

describe("When spinning words", () => {
  it("should not spin any words if under 5 characters", () => {
    const result = spinWords("no spin now");
    const expected = "no spin now";

    expect(result).toEqual(expected);
  });
  it("should not spin any words if under 5 characters", () => {
    const result = spinWords("Stop Spinning My Words");
    const expected = "Stop gninnipS My sdroW";

    expect(result).toEqual(expected);
  });
  it("should not spin any words if under 5 characters", () => {
    const result = spinWords("test");
    const expected = "test";

    expect(result).toEqual(expected);
  });
  it("should not spin any words if under 5 characters", () => {
    const result = spinWords("testing");
    const expected = "gnitset";

    expect(result).toEqual(expected);
  });

  // TODO: Add more tests
});
