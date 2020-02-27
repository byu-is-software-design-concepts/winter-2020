import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('returns false on unequal x and o strings', () => {
    const result = isXAndOValid('oxoo')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('ignores case', () => {
    const result = isXAndOValid('xXXOoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('returns true with equal x and o even if other strings are present', () => {
    const result = isXAndOValid('xxooplkarjaja')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('combines the last two tests', () => {
    const result = isXAndOValid('XylophOneX')
    const expected = true

    expect(result).toEqual(expected)
  })
})
