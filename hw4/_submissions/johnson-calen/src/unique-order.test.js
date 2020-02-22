import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('should work with duplicated letters', () => {
    const result = uniqueInOrder('AABBC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  it('should work with repeats', () => {
    const result = uniqueInOrder('AABBCCAA')
    const expected = ['A', 'B', 'C', 'A']

    expect(result).toEqual(expected)
  })

  it('should work with repeats', () => {
    const result = uniqueInOrder('AABBCCAALLNNDDEEAAWWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEC')
    const expected = ['A', 'B', 'C', 'A', 'L', 'N', 'D', 'E', 'A', 'W', 'E', 'C']

    expect(result).toEqual(expected)
  })
})
