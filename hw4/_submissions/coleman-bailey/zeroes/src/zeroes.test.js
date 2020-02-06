import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests

  // Suggested test: testing with multiple types (boolean, strings)
  it('should move one zero to the end with an array of different data types', () => {
    const result = moveZeroesToEnd(['Nicole', 0, 21, 'Keven', true])
    const expected = ['Nicole', 21, 'Keven', true, 0]

    expect(result).toEqual(expected)
  })

  // Suggested test: testing multiple 0's in the array
  it('should move multipe zeros to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([0, 3, 0, 2, 0, 1])
    const expected = [3, 2, 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
