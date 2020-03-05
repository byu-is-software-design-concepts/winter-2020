import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for words with more letters', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for words with completely different letters', () => {
    const result = scramble('absei', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return false for words with 1 missing letter', () => {
    const result = scramble('worl', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
})
