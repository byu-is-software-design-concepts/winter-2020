import { createMumble } from './mumbling'

describe('When mumbling words', () => {
    it('should return an empty string when given an empty string', () => {
        const result = createMumble("");
        const expected = "";

        expect(result).toEqual(expected);
    });
    it('should seperate letters by hypen', () => {
        const result = createMumble("AB")[1];
        const expected = "-";

        expect(result).toEqual(expected);
    });
    it('should have n-1 number of hypens where n is equal to characters in string', () => {
        const result = (createMumble("ABCD").match(/-/g) || []).length
        const expected = "ABCD".length - 1;

        expect(result).toEqual(expected);
    });
    it('should capitalize first letter of each sequence', () => {
        const result = createMumble("a");
        const expected = "A";

        expect(result).toEqual(expected);
    });
    it('Each character should repeat itself one more time than the previous letter', () => {
        const result = createMumble("ABC");
        const expected = "A-Bb-Ccc";

        expect(result).toEqual(expected);
    })
  // TODO: Add more tests
})
// ```
// createMumble("abcd")    # "A-Bb-Ccc-Dddd"
// createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
// ```