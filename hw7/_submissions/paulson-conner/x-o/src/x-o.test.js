import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should handle test case 1', () => {
    const result = isXAndOValid('ooxx')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should handle test case 2', () => {
    const result = isXAndOValid('xoxx')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should handle test case 3', () => {
    const result = isXAndOValid('xxooplkarjaja')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return true for an empty string', () => {
    const result = isXAndOValid('')
    const expected = true

    expect(result).toEqual(expected)
  })
})
