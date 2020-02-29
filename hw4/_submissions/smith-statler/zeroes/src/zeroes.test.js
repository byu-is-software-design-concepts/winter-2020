import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should ignore zeroes in a string data type', () =>{
    const result = moveZeroesToEnd(["Hi", "0", 0, "there"])
    const expected = ["Hi", "0", "there", 0]

    expect(result).toEqual(expected)
  })
  it('should move all 0s in array to end', () => {
    const result = moveZeroesToEnd([0, 0, 0, 2, 0, 4])
    const expected = [2, 4, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  // Suggested test: testing multiple 0's in the array
})
