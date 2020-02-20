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

  test('should return false for words that do not match the same letters', () => {
    const result = scramble('ealp', 'apple')
    const expected = false

    expect(result).toEqual(expected)
  })

  test('should return false for words that do not match the same letters', () => {
    const result = scramble('e', 'ee')
    const expected = false

    expect(result).toEqual(expected)
  })

  test('should return true for complex words words with the same letters and extras', () => {
    const result = scramble('aiekfjdnucbes', 'feedbacks')
    const expected = true

    expect(result).toEqual(expected)
  })
})
