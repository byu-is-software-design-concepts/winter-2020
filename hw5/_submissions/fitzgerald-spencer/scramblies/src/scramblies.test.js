import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '');
    const expected = true;

    expect(result).toEqual(expected);
  })
  it('should return true if str1 has same letters as str2', () => {
    const result = scramble('wrold', 'world');
    const expected = true;

    expect(result).toEqual(expected);
  });
  it('should return false if str1 has only 1 "o" while str2 has 2 "o"s', () => {
    const result = scramble('wrold', 'woorld');
    const expected = false;

    expect(result).toEqual(expected);
  });
  // TODO: Add more tests
})