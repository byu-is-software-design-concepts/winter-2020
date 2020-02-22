import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  test('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })

  test('testing with multiple 0s ', () => {
    const result = moveZeroesToEnd([0, 2, 0, 3, 0])
    const expected = [2, 3, 0, 0, 0]

    expect(result).toEqual(expected)
  })

  test('testing with multiple data types', () => {
    const result = moveZeroesToEnd([3, "0", "true", 3])
    const expected = [3, "true", 3, 0]

    expect(result).toEqual(expected)
  })

})
