import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('moves zero to end with multiple types', () => {
    const result = moveZeroesToEnd([false,1,1,2,0,1,3,"a"])
    const expected = [false,1,1,2,1,3,"a",0]

    expect(result).toEqual(expected)
  })
  it('moves zero to end with multiple types and many zeros', () => {
    const result = moveZeroesToEnd([0,false,1,0,1,2,0,1,3,"a",0])
    const expected = [false,1,1,2,1,3,"a",0,0,0,0]

    expect(result).toEqual(expected)
  })
})
