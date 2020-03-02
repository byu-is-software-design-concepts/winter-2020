import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on unequal x and o strings', () => {
    const result = isXAndOValid('xxoooo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true when empty', () => {
    const result = isXAndOValid('')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should work when other letters are present', () => {
    const result = isXAndOValid('xxaaaooi')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should work when letters are capitalized', () => {
    const result = isXAndOValid('XXoO')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
