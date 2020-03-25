import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true when the same letters in the word are given', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false when the same letters in the word are not given', () => {
    const result = scramble('wrol', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
})