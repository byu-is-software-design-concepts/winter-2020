import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
})


  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  describe('When given a string', () => {
    it('It should keep it in order', () => {
      const result = uniqueInOrder('ABC')
      const expected = ["A", "B", "C"]
  
      expect(result).toEqual(expected)
    })
  })
  // Suggested test: testing duplicated letters "AABBCCCC"
  describe('When given unordered duplicates', () => {
    it('should return unique in order', () => {
      const result = uniqueInOrder('AAAABBBCCDAABBBL')
      const expected = ["A","B","C","D","A","B", "L"]
  
      expect(result).toEqual(expected)
    })
})

