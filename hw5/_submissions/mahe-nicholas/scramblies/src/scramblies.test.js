import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should return true for the same letters mixed up', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true if it has all the letters but additional letters', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false if the length of str1 is smaller than str2', () => {
    const result = scramble('rkqw', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
})
