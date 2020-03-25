import {
  isXAndOValid
} from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  // More tests
  it('should return false on equal x and o strings', () => {
    const result = isXAndOValid('xoxx')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true on equal x and o despite other letters', () => {
    const result = isXAndOValid('xxooplkarjaja')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should be case insensitive', () => {
    const result = isXAndOValid('xO I LUV KEVEN Xo')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false on different number of x and o', () => {
    const result = isXAndOValid('xoX I LUV KEVEN xO')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true despite order', () => {
    const result = isXAndOValid('AxBoCxDo')
    const expected = true

    expect(result).toEqual(expected)
  })
})