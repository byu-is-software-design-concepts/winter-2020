import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  test('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  test('should return false on unequal x and o strings', () => {
    const result = isXAndOValid('xxooo')
    const expected = false

    expect(result).toEqual(expected)
  })

  test('should be case insensitive', () => {
    const result = isXAndOValid('XxoO')
    const expected = true

    expect(result).toEqual(expected)
  })

  test('should work with other letters', () => {
    const result = isXAndOValid('xxooplkarjaja ')
    const expected = true

    expect(result).toEqual(expected)
  })
})
