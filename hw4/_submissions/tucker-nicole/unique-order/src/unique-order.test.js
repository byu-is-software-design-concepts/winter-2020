import {
  uniqueInOrder
} from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests

  // Suggested test: testing a simple string 'ABC'
  it('should return array including each letter of simple string', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  // Suggested test: testing duplicated letters 'AARRRBEBCCKCC'
  it('should return array excluding duplicates next to it in string', () => {
    const result = uniqueInOrder('AARRRBEBCCKCC')
    const expected = ['A', 'R', 'B', 'E', 'B', 'C', 'K', 'C']

    expect(result).toEqual(expected)
  })

  // Suggested test: testing duplicating letter 'AAAAAAAAAAAAAAAA'
  it('should return array excluding duplicates next to it in string', () => {
    const result = uniqueInOrder('AAAAAAAAAAAAAAAA')
    const expected = ['A']

    expect(result).toEqual(expected)
  })

  // Suggested test: testing duplicated letters'AAAABBBCCDAABBBL'
  it('should return array excluding duplicates next to it in string', () => {
    const result = uniqueInOrder('AAAABBBCCDAABBBL')
    const expected = ['A', 'B', 'C', 'D', 'A', 'B', 'L']

    expect(result).toEqual(expected)
  })

})