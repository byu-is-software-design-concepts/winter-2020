import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })

  it('ABC returns ABC', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  it('AABBCC returns ABC', () => {
    const result = uniqueInOrder('AABBCCCCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  it('ABCCBBA returns ABCBA', () => {
    const result = uniqueInOrder('ABCCBBBBA')
    const expected = ['A', 'B', 'C', 'B', 'A']

    expect(result).toEqual(expected)
  })

})