import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing with multiple types (boolean, strings)
  it('Works with other values as well', () => {
    const result = moveZeroesToEnd(['A', 'B', 0, true, 'etc', 0, 'C'])
    const expected = ['A', 'B', true, 'etc', 'C', 0, 0]

    expect(result).toEqual(expected)
  })

  it('Works with more than one 0', () => {
      const result = moveZeroesToEnd([3, 0, 2, 0, 1])
      const expected = [3, 2, 1, 0, 0]

      expect(result).toEqual(expected)
  })
  // Suggested test: testing multiple 0's in the array
})
