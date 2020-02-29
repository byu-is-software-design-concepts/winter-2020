import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return true for words with the same letters and extras', () => {
    const result = scramble('owryzhdlf', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false for words that do not have the same letters', () => {
    const result = scramble('pr', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return false for words that have only 1 instance of a repeated letter', () => {
    const result = scramble('hipo', 'hippo')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true for words that have multiple instances of the same letter', () => {
    const result = scramble('hippo', 'hippo')
    const expected = true

    expect(result).toEqual(expected)
  })


})
