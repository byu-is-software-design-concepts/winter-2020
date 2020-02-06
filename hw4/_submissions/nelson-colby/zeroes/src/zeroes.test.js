import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  it('should move one zero to the end with an array of numbers, bools, and strings', () => {
    const result = moveZeroesToEnd([3, false, 0, 2, 10, 'foo', 1])
    const expected = [3, false, 2, 10, 'foo', 1, 0]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing multiple 0's in the array
  it('should move multiple zeroes to the end with an array of numbers, bools, and strings', () => {
    const result = moveZeroesToEnd([3, false, 0, 2, 0, 10, 0, 'foo', 1])
    const expected = [3, false, 2, 10, 'foo', 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should move multiple adjacent zeroes to the end with an array of numbers, bools, and strings', () => {
    const result = moveZeroesToEnd([3, false, 0, 0, 0, 2, 0, 10, 0, 'foo', 1])
    const expected = [3, false, 2, 10, 'foo', 1, 0, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
