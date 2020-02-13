import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests

  it('should return true for matching strings', () => {
    const result = scramble('world', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return true if part of str1 can be made into str2', () => {
    const result = scramble('qrwfozdls', 'wolrd')
    const expected = true

    expect(result).toEqual(expected)
  })
})