import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  test('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  
  test('returns true when passing the same string', () => {
    const result = scramble('aa', 'aa')
    const expected = true

    expect(result).toEqual(expected)
  })

  test('returns true when passing mixed string', () => {
    const result = scramble('olhel', 'hello')
    const expected = true

    expect(result).toEqual(expected)
  })
  
  test('returns true when passing reversed', () => {
    const result = scramble('hello', 'olhel')
    const expected = true

    expect(result).toEqual(expected)
  })
  

})
