import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true with other letters in the mix', () => {
    const result = isXAndOValid('xasdfxreowhonml')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false with inequal x and o count', () => {
    const result = isXAndOValid('xxo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true with capital letter', () => {
    const result = isXAndOValid('xXoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
