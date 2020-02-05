import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should move one zero to the end with an array of multiple values', () => {
    const result = moveZeroesToEnd([false, 0, 2, 1, "YES!"])
    const expected = [false, 2, 1,"YES!",0]
    expect(result).toEqual(expected)
  })
  it('should move multiple zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([0, 0, 3, 0, 2, 1])
    const expected = [3, 2, 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
