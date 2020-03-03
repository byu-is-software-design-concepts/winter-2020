import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoxxijdieowoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('qwertyuioplkjhgfdsazxcvbnm,')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xoxoxoxoxox,')
    const expected = false

    expect(result).toEqual(expected)
  })
})
