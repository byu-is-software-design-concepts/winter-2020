import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true given a string with no x or o', () => {
    const result = isXAndOValid('hi')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should work given a string with other characters', () => {
    const result = isXAndOValid('xx123axobcdefgoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on counts that don\'t match', () => {
    const result = isXAndOValid('xxxoo')
    const expected = false

    expect(result).toEqual(expected)
  })
  
})
