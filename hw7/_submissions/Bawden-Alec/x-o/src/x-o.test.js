import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on unequal x and o strings', () => {
    const result = isXAndOValid('xxxoo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings regardless of upper or lower case', () => {
    const result = isXAndOValid('XXOo')
    const expected = true

    expect(result).toEqual(expected)
  })
})
