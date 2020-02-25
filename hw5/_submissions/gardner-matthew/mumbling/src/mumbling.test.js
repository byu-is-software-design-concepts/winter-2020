import { createMumble } from "./mumbling";

describe("When mumbling words", () => {
  it("should return an empty string when given an empty string", () => {
    const result = createMumble("");
    const expected = "";

    expect(result).toEqual(expected);
  });
  it("should return 'A-Bb-Ccc-Dddd' when given 'abcd'", () => {
    const result = createMumble("abcd");
    const expected = "A-Bb-Ccc-Dddd";

    expect(result).toEqual(expected);
  });
  it("should return 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy' when given 'RqaEzty'", () => {
    const result = createMumble("RqaEzty");
    const expected = "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy";

    expect(result).toEqual(expected);
  });
});
