import { moveZeroesToEnd } from './zeroes' // TODO: Update this file to yours

describe('When moving zeroes to the end', () => {
  // Test suite
  it('should move the zeroes with an array of numbers', () => {
    // Individual test
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected) // Assertion statement
  })
  it('should move the zeroes with an array of random types', () => {
    const result = moveZeroesToEnd([3, 0, 2, 0, false, 'hello', 1])
    const expected = [3, 2, false, 'hello', 1, 0, 0]

    expect(result).toEqual(expected)
  })
  test('should work with an array of 0s', () => {
    const result = moveZeroesToEnd([0, 0, 0, 0, 0, 0])
    const expected = [0, 0, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
  test('should work with an array without 0s', () => {
    const result = moveZeroesToEnd([3, 2, true, 'yolo', false, 3, 2])
    const expected = [3, 2, true, 'yolo', false, 3, 2]

    expect(result).toEqual(expected)
  })
})
