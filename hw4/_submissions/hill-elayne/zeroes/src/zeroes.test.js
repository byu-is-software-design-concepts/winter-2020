import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should move two zeroes to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 0, 2, 1])
    const expected = [3, 2, 1, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should move zeroes from different places to the end', () => {
    const result = moveZeroesToEnd([3, 0, 0, 2, 0, 1])
    const expected = [3, 2, 1, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should essentially do nothing with an array of zeroes', () => {
    const result = moveZeroesToEnd([0, 0, 0])
    const expected = [0, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should do nothing with no zeroes', () => {
    const result = moveZeroesToEnd([3, 2, 1])
    const expected = [3, 2, 1]

    expect(result).toEqual(expected)
  })
})
