import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for string of same length', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for long string', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for string', () => {
    const result = scramble('rkqodlerd', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true with strings with duplicated letters', () => {
    const result = scramble('csraicpatjv', 'javascript')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false with strings with duplicated letters', () => {
    const result = scramble('csricpatjv', 'javascript')
    const expected = false

    expect(result).toEqual(expected)
  })

})
