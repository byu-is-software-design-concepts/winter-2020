import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should return extra letters', () => {
    const result = scramble('owryzhdlf', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false for words that do not have letters in world', () => {
    const result = scramble('nice', 'world')
    const expected = false

    expect(result).toEqual(expected)
  })
})