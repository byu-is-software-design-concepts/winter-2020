import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  
  it('should return true for rkqodlw and world', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false for ksllaksj and woqieryu', () => {
    const result = scramble('ksllaksj', 'woqieryu')
    const expected = false

    expect(result).toEqual(expected)
  })

})
