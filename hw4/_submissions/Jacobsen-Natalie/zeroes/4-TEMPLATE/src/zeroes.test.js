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
  it('should move the zeroes with multiple zeroes in a row', () => {
    const result = moveZeroesToEnd([true, 0, 0, 'bye', 2, 0, 5, 'hi', 7, 9])
    const expected = [true, 'bye', 2, 5, 'hi', 7, 9, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should work with zeroes already at the end of the array', () => {
    const result = moveZeroesToEnd([0, false, 0, true, 6, 7, 8, 0, 0])
    const expected = [false, true, 6, 7, 8, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
