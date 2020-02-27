import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false on equal X and O strings that are capitalized', () => {
    const result = isXAndOValid('XXOO')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return false on when x and o are not equal', () => {
    const result = isXAndOValid('xoxx')
    const expected = false

    expect(result).toEqual(expected)
  })

})
