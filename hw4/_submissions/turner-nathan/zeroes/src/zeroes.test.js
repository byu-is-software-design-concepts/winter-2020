import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing with multiple types (boolean, strings)
  it('should move one zero to the end in a collection of different types', () => {
    const result = moveZeroesToEnd([false, 'wazzup', 0, 'homey', 2, 1])
    const expected = [false, 'wazzup', 'homey', 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing multiple 0's in the array
  it('should move all zeroes to the end', () => {
    const result = moveZeroesToEnd(['hello', 0, 0, 'world', 1, 0, 2, true])
    const expected = ['hello', 'world', 1, 2, true, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
