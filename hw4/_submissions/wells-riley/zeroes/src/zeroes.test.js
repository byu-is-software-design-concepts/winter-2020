import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should work with multiple types', () => {
    const result = moveZeroesToEnd([false,'hi','0',3,0,2,1])
    const expected = [false,'hi','0',3,2,1,0]
    
    expect(result).toEqual(expected)
  })
  it('should work with multiple zeroes in the array', () => {
    const result = moveZeroesToEnd([3,0,2,0,1,0,0])
    const expected = [3,2,1,0,0,0,0]

    expect(result).toEqual(expected)
  })
})
