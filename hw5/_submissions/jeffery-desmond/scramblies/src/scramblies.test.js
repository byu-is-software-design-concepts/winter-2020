import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
    it('should return true for a string that contains the same word in a different order', () => {
        const result = scramble('wrold', 'world')
        const expected = true

        expect(result).toEqual(expected)
    })
    it('should return true for a string that contains the same word but is longer', () => {
        const result = scramble('rkqodlw', 'world')
        const expected = true

        expect(result).toEqual(expected)
    })
})
