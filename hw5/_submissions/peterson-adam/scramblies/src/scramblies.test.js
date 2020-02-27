import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true a matching string', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for a more complicated string', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for a non matching string', () => {
    const result = scramble('take', 'steak')
    const expected = false

    expect(result).toEqual(expected)
  })

})
