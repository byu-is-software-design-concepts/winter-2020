import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should work for words with the same letters', () => {
    const result = scramble('owryzhdlf', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should work for words without the same letters', () => {
    const result = scramble('pr', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
    it('should work for empty string', () => {
      const result = scramble('', '')
      const expected = true
  
      expect(result).toEqual(expected)
    })
})