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
  it('should move zero to the end of an array with different data types', () => {
    const result = moveZeroesToEnd(["hi", 0, true, 1])
    const expected = ["hi", true, 1, 0]

    expect(result).toEqual(expected)
  })

  it('should move multiple zeros to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 0, 1])
    const expected = [3, 1, 0, 0]

    expect(result).toEqual(expected)
  })


})
