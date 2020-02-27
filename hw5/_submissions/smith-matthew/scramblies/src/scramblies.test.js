import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '');
    const expected = true;

    expect(result).toEqual(expected);
  });
  it('should return true for when the string1 contains the letters to make string2', () => {
    const result = scramble('rkqodlw', 'world');
    const expected = true;

    expect(result).toEqual(expected);
  });
  it('should return false for when string1 is shorter than string2 (because it is impossible to be true)', () => {
    const result = scramble('steve', 'helloooo');
    const expected = false;

    expect(result).toEqual(expected);
  });
  it('should return true for when the string1 contains multiple of the letters to make string2', () => {
    const result = scramble('hheellllloooo', 'hello');
    const expected = true;

    expect(result).toEqual(expected);
  });
  // TODO: Add more tests
})
