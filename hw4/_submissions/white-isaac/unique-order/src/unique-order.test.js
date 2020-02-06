import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('should work with a simple string', () => {
    const result = uniqueInOrder('ABCD')
    const expected = ["A","B","C","D"]

    expect(result).toEqual(expected)
  })
  it('should return one of each letter that was in a row', () => {
    const result = uniqueInOrder('AAAABBBCCD')
    const expected = ["A","B","C","D"]

    expect(result).toEqual(expected)
  })
  it('should return allow for the letters repeating later', () => {
    const result = uniqueInOrder('AAAABBBCCDAABBBL')
    const expected = ["A","B","C","D","A","B", "L"]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  // Suggested test: testing duplicated letters "AABBCCCC"
})
