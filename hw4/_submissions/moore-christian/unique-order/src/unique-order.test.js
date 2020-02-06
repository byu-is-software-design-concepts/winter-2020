import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  it('should return array with each letter of simple string', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should return array with each unique letter of duplicated string', () => {
    const result = uniqueInOrder('AABBCCCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })

  it('should return array with each unique letter of crazy string', () => {
    const result = uniqueInOrder('THIIIIISISSAGHEEETTTTOSSTRINGGGG')
    const expected = ['T', 'H', 'I', 'S', 'I', 'S', 'A', 'G', 'H', 'E', 'T', 'O', 'S', 'T', 'R', 'I', 'N', 'G']

    expect(result).toEqual(expected)
  })
})
