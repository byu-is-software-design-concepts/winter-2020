import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing with multiple types (boolean, strings)
  it('should move one zero to the end with an array of different data types', () => {
    const result = moveZeroesToEnd(['Michael', 0, [1,2,3], 21, 'Dwight', true])
    const expected = ['Michael', [1,2,3,],21,'Dwight', true, 0]

    expect(result).toEqual(expected)
  })

  // Suggested test: testing multiple 0's in the array
  it('should move multipe zeros to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([0, 3, 0, 2, 0, 1, 0, true])
    const expected = [3, 2, 1, true, 0, 0, 0, 0]

    expect(result).toEqual(expected)
  })
})
