import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  // Suggested test: testing duplicated letters "AABBCCCC"

  it('should return A, B, C, when passed ABC', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  it('should return A, B, C, when passed AABBCCCC', () => {
    const result = uniqueInOrder('AABBCCCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  it('should return A, B, C, A, D, F when passed AABBCCCCADF', () => {
    const result = uniqueInOrder('AABBCCCCADF')
    const expected = ['A', 'B', 'C', 'A', 'D', 'F']

    expect(result).toEqual(expected)
  })
})
