import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })})
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  describe('moveZeroesToEnd', () => {
    it('should move one zero to the end with an array of numbers', () => {
      const result = moveZeroesToEnd([3, 0, 2, 1,0, 0,343, "Hello"])
      const expected = [3, 2, 1, 343, "Hello", 0, 0, 0]
  
      expect(result).toEqual(expected)
    })})
  // Suggested test: testing multiple 0's in the array
  describe('moveZeroesToEnd', () => {
    it('should move one zero to the end with an array of numbers', () => {
      const result = moveZeroesToEnd([false,1,0,1,2,0,1,3,"a"])
      const expected = [false,1,1,2,1,3,"a",0,0]
  
      expect(result).toEqual(expected)
    })})
