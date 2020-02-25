import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  // Suggested test: testing multiple 0's in the array
  
  it('should move one zero to the end with an array of various data types', () => {
    const result = moveZeroesToEnd([true, 0, "This", 1])
    const expected = [true, "This", 1, 0]

    expect(result).toEqual(expected)
  })

  it('should move several zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([0, 3, 0, 0, 2, 1])
    const expected = [3, 2, 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
