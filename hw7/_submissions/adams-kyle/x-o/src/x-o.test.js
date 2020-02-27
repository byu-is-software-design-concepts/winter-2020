import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('should return true on all caps x and o string', () => {
    const result = isXAndOValid('XXXOOO')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('should return true on x and o string with other letters', () => {
    const result = isXAndOValid('XXXOOOlalalalala')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('should return true for zeros on random letters', () => {
    const result = isXAndOValid('iuqywtteuuwqywtey')
    const expected = true

    expect(result).toEqual(expected)
  })
  
})
