import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('should return an array of "A" "B""C" when "ABC" is entered', () => {
    const result = uniqueInOrder('ABC')
    const expected = ["A", "B", "C"]

    expect(result).toEqual(expected)
  })
  it('should return a unique array of letters', () =>{
    const result = uniqueInOrder('AABBCCDD')
    const expected = ["A", "B", "C", "D"]

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  // Suggested test: testing a simple string "ABC"
  // Suggested test: testing duplicated letters "AABBCCCC"
})
