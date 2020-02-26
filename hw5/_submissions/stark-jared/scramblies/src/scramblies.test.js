import { scramble } from "./scramblies";

describe("When validating scrambled words", () => {
  it("should return true for an empty string", () => {
    const result = scramble("", "");
    const expected = true;

    expect(result).toEqual(expected);
  });
  it("should return true for hfrkcea and car", () => {
    const result = scramble("hfrkcea", "car");
    const expected = true;

    expect(result).toEqual(expected);
  });
  it("should return false for jonathon and phillipians", () => {
    const result = scramble("jonathon", "phillipians");
    const expected = false;

    expect(result).toEqual(expected);
  });
  it("should return true racecar and racecar", () => {
    const result = scramble("racecar", "racecar");
    const expected = true;

    expect(result).toEqual(expected);
  });
  it("should return false for billybobjoe and zoomongoose", () => {
    const result = scramble("billybobjoe", "zoomongoose");
    const expected = false;

    expect(result).toEqual(expected);
  });
  // TODO: Add more tests
});
