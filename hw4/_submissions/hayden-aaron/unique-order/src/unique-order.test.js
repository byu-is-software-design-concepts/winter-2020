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
  it('test 3', () => {
    const result = uniqueInOrder('AABBAABBCCDDQ')
    const expected = ['A', 'B', 'A', 'B', 'C', 'D', 'Q']

    expect(result).toEqual(expected)
  })
  it('test 4', () => {
    const result = uniqueInOrder('BBBBBBBBBBBBBBBBBAB')
    const expected = ['B', 'A', 'B']

    expect(result).toEqual(expected)
  })
})
