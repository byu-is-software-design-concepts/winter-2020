import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoojajdfasdf')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on more 0 than x', () => {
    const result = isXAndOValid('xxooojajdfasdf')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('no x or o', () => {
    const result = isXAndOValid('jalsjfkasd')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
