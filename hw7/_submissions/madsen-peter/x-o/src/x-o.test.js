import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests

  it('xxooplkarjaja should return true', () => {
    const result = isXAndOValid('xxooplkarjaja')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('xoxx should return false', () => {
    const result = isXAndOValid('xoxx')
    const expected = false

    expect(result).toEqual(expected)
  })
})
