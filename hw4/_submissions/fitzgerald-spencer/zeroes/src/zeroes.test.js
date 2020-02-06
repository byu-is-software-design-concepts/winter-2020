import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1]);
    const expected = [3, 2, 1, 0];

    expect(result).toEqual(expected);
  })
  // Suggested test: testing with multiple types (boolean, strings)
  it('should move one zero to the end even if other types are there', () => {
    const result = moveZeroesToEnd([3, 0, false, 1, true]);
    const expected = [3, false, 1, true, 0];

    expect(result).toEqual(expected);
  });
  // Suggested test: testing multiple 0's in the array
  it('should move 0s to the end of the array even if there are more than 1.', () => {
    const result = moveZeroesToEnd([3, 0, 0, 1]);
    const expected = [3, 1, 0, 0];

    expect(result).toEqual(expected);

  });
})
