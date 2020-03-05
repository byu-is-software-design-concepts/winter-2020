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
  it('it should work with non-letters', () => {
    const result = uniqueInOrder('AABBC122333')
    const expected = ['A', 'B', 'C', '1', '2', '3']

    expect(result).toEqual(expected)
  })
})
