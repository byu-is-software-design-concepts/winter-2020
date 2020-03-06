import { convertToCamelCase } from "./camel-case";

describe("When converting to camel case", () => {
  it("should convert two words", () => {
    const result = convertToCamelCase("hello case");
    const expected = "helloCase";

    expect(result).toEqual(expected);
  });
  it("return empty string when empty string given", () => {
    const result = convertToCamelCase("");
    const expected = "";

    expect(result).toEqual(expected);
  });
  it("should convert three words", () => {
    const result = convertToCamelCase("i am camel");
    const expected = "iAmCamel";

    expect(result).toEqual(expected);
  });
});
