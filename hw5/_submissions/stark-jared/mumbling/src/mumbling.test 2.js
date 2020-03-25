import { createMumble } from "./mumbling";

describe("When mumbling words", () => {
  it("should return an empty string when given an empty string", () => {
    const result = createMumble("");
    const expected = "";

    expect(result).toEqual(expected);
  });
  it("should return A-Bb-Ccc-Dddd string when given abcd", () => {
    const result = createMumble("abcd");
    const expected = "A-Bb-Ccc-Dddd";

    expect(result).toEqual(expected);
  });
  it("should return R-Dd-Aaa-Rrrr-Zzzzz-Ffffff-Yyyyyyy when given RDarzFy", () => {
    const result = createMumble("RDarzFy");
    const expected = "R-Dd-Aaa-Rrrr-Zzzzz-Ffffff-Yyyyyyy";

    expect(result).toEqual(expected);
  });
  it("should return C-Ll-Aaa-Ssss when given CLAs", () => {
    const result = createMumble("CLAs");
    const expected = "C-Ll-Aaa-Ssss";

    expect(result).toEqual(expected);
  });
});
