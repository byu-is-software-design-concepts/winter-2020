import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  it('should return the same string', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  
  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should remove duplicate letters', () => {
    const result = uniqueInOrder('AAAABBBBBCCCCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  // Extra Test
  it('should remove duplicate even when out of order', () => {
    const result = uniqueInOrder('AAAABBBBBCCCCCAAABBBCCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
})
