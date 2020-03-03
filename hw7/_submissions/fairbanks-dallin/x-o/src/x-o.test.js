import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on unequal x and o strings', () => {
    const result = isXAndOValid('xxooo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings regardles of capitalization', () => {
    const result = isXAndOValid('xXxOoO')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('It should return true on equal x and o strings mixed with other chars', () => {
    const result = isXAndOValid('the quick fox')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
