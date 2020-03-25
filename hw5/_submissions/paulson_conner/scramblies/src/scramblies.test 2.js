/* global describe, it, expect */
import { scramble } from './scramblies';

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '');
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return false for non-matching strings', () => {
    const result = scramble('a', 'b');
    const expected = false;

    expect(result).toEqual(expected);
  });

  it('should return true for identical strings', () => {
    const result = scramble('a', 'a');
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true for matching strings with NO extra characters', () => {
    const result = scramble('wrold', 'world');
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true for matching strings WITH extra characters', () => {
    const result = scramble('rkqodlw', 'world');
    const expected = true;

    expect(result).toEqual(expected);
  });
});
