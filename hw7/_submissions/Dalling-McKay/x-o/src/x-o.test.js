import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true on uppercase X and O', () => {
    const result = isXAndOValid('XXOXOO')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false on unbalanced string', () => {
    const result = isXAndOValid('oXxxO')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true on string with other chars', () => {
    const result = isXAndOValid('!oybC-X`oxt_Pxq#O')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
