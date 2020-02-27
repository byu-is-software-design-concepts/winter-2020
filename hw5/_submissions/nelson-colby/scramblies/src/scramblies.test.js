import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for wrold and world', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for wrold and worlld', () => {
    const result = scramble('wrold', 'worlld')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true for rkqodlw and world', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
})
