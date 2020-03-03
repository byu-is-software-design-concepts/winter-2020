import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]
    
    expect(result).toEqual(expected)
  })
  it('should move all zeros to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 0, 0, 2, 1])
    const expected = [3, 2, 1, 0, 0, 0]
    
    expect(result).toEqual(expected)
  })
  it('should move all zeros to the end with an array of things', () => {
    const result = moveZeroesToEnd([3, 0, "Waffles", 0, "Lil Sebastian", 0, 2, 1])
    const expected = [3, 2, 1, 0, 0, 0]
    
    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  // Suggested test: testing multiple 0's in the array
})
