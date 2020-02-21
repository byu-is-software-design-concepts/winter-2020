import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on equal x and o strings', () => {
    const result = isXAndOValid('xxo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings even with other letters', () => {
    const result = isXAndOValid('xyzxzyoadfssoputry')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on equal x and o strings even with other letters', () => {
    const result = isXAndOValid('xyxzozoyyzyozy')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings even with no letters', () => {
    const result = isXAndOValid('')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings even with differently cased letters', () => {
    const result = isXAndOValid('xXOO')
    const expected = true

    expect(result).toEqual(expected)
  })
})
