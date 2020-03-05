import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  it('should return ["A","B",C"] for "ABC"', () => {
    const result = uniqueInOrder('ABC')
    const expected = ["A","B","C"]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should not duplicate letters in the array', () => {
    const result = uniqueInOrder("AABBBBCCCCC")
    const expected = ["A","B","C"]

    expect(result).toEqual(expected)
  })
  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should not duplicate letters in order but should allow the same letter later', () => {
    const result = uniqueInOrder("AABBBBCCCACCBL")
    const expected = ["A","B","C","A","C","B","L"]

    expect(result).toEqual(expected)
  })
})
