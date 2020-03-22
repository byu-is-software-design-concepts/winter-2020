import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for words with more letters that include the needed letters', () => {
    const result = scramble('latopbaksne', 'nbabasketball')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for words with the different letters', () => {
    const result = scramble('poot', 'letsgo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return false for words with the different letters', () => {
    const result = scramble('letsg', 'letsgo')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('should return true for words with the same exact letters', () => {
    const result = scramble('ydwoh', 'howdy')
    const expected = true

    expect(result).toEqual(expected)
  })
})
