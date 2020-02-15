import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })

  // TODO: Add more tests
  
  // Suggested test: testing multiple 0's in the array
  it('should move multiple zeroes to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 0, 0, 1])
    const expected = [3, 2, 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })

  // Suggested test: testing with multiple types (boolean, strings)
  it('should move multiple zeroes to the end with an array of mixed values', () => {
    const result = moveZeroesToEnd([0, 3, 0, "hi", 2, 0, true, 0, 1, "yo"])
    const expected = [3, "hi", 2, true, 1, "yo", 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  
  // Extra Test!
  it('should remove nothing with an array of mixed values', () => {
    const result = moveZeroesToEnd([3,"hi", 2, true, 1, "yo"])
    const expected = [3, "hi", 2, true, 1, "yo"]

    expect(result).toEqual(expected)
  })

})
