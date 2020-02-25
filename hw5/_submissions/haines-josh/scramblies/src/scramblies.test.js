import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests

  it('should return false for the same length, with different letters', () => {
    const result = scramble('wrold', 'tests')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true for the same length, with same letters', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return true for different length, with same letters', () => {
    const result = scramble('twrolds', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
})
