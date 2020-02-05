import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]    
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  it('should move multiple zeros to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([0, 3, 0, 2, 0, 1])
    const expected = [3, 2, 1, 0, 0, 0]    
  })
  // Suggested test: testing multiple 0's in the array
  it('should move one zero to the end with an array of many data types', () => {
    const result = moveZeroesToEnd([false, 0, 'hello', 1])
    const expected = [false, 'hello', 1, 0]    
  })
})
