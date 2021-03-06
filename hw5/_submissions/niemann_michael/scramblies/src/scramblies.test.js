import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for an empty string', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for an empty string', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for an empty string', () => {
    const result = scramble('rkqod', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})
