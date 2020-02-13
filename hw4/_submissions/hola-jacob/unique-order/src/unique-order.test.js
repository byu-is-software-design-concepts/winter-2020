import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('Simple string test', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A','B','C']

    expect(result).toEqual(expected)
  })
  it('A complicated order', () => {
    const result = uniqueInOrder('AAABBCCDD')
    const expected = ['A','B','C','D']

    expect(result).toEqual(expected)
  })
  it('An even more complicated order', () => {
    const result = uniqueInOrder('AAABBEECCDDFFGLLM')
    const expected = ['A','B','E','C','D','F','G','L','M']

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  // Suggested test: testing duplicated letters "AABBCCCC"
})
