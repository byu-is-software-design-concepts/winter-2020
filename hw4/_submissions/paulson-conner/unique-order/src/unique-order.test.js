/* eslint-disable no-undef */
import { uniqueInOrder } from './unique-order';

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('');
    const expected = [];

    expect(result).toEqual(expected);
  });

  // Suggested test: testing a simple string "ABC"
  it('should return an array with the correct characters for a string with no repeats', () => {
    const result = uniqueInOrder('ABC');
    const expected = ['A', 'B', 'C'];

    expect(result).toEqual(expected);
  });

  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should return an array with the correct characters for a string with repeating characters', () => {
    const result = uniqueInOrder('AABBCCCC');
    const expected = ['A', 'B', 'C'];

    expect(result).toEqual(expected);
  });
});
