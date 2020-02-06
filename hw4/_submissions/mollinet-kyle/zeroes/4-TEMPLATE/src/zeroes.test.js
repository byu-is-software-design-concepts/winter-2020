import { moveZeroesToEnd } from './zeroes' // TODO: Update this file to yours

describe('When moving zeroes to the end', () => {
  it('should move the zeroes with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should move the zeroes with an array of random types', () => {
    const result = moveZeroesToEnd([3, 0, 2, 0, false, 'hello', 1])
    const expected = [3, 2, false, 'hello', 1, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should be able to handle a bunch of boolean values', () => {
    const result = moveZeroesToEnd([true, true, 0, false, 0, true, 0, 0, false])
    const expected = [true, true, false, true, false, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
