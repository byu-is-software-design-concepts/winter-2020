import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on  notequal x and o strings', () => {
    const result = isXAndOValid('xxooo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true even with other letters in the string', () => {
    const result = isXAndOValid('xxooprs')
    const expected = true

    expect(result).toEqual(expected)
  })
})
