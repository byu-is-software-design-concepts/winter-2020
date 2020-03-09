import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  // Suggested test: testing a simple string "ABC"
  it('should return the string as array, do not remove letters', () => {
    expect(uniqueInOrder('ABC')).toEqual(['A', 'B', 'C'])
  })
  // Suggested test: testing duplicated letters "AABBCCCC"
  it('should return ABC, removing duplicate letters', () => {
    expect(uniqueInOrder('AABBCCCC')).toEqual(['A', 'B', 'C'])
  })
  // Testing repeated duplicates but not adjacent.
  it('should return ABACA when given AABAAACAA', () => {
    expect(uniqueInOrder('AABAAACAA')).toEqual(['A', 'B', 'A', 'C', 'A'])
  })
})
