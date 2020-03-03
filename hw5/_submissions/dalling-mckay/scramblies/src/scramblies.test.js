import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for words with the same exact letters', () => {
    const result = scramble('owrdl', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it(`scramble('rkqodlw', 'world') === true`, () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`scramble('mississippi', 'pmisssiipsi') === true`, () => {
    const result = scramble('mississippi', 'pmisssiipsi')
    const expected = true

    expect(result).toEqual(expected)
  })
})
