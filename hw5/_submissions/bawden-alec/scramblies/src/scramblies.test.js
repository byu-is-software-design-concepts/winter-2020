import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false if not a match', () => {
    const result = scramble('car', 'asd')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('Should return true if a match', () => {
    const result = scramble('car', 'rac')
    const expected = true

    expect(result).toEqual(expected)
  })

})
