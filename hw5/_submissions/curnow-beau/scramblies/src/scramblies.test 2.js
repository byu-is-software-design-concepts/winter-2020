import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for bed', () => {
    const result = scramble('abcde', 'bed')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for mood', () => {
    const result = scramble('dmno', 'mood')
    const expected = false

    expect(result).toEqual(expected)
  })
})
