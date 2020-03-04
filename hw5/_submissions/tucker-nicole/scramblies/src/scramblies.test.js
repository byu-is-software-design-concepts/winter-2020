import {
  scramble
} from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('wrold compared to world returns true', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('rkqodlw compared to world returns true', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('veenk lcarnso compared to keven carlson returns true', () => {
    const result = scramble('veenk lcarnso', 'keven carlson')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('nicolee compared to nicole returns true', () => {
    const result = scramble('nicolee', 'nicole')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('keven compared to keven returns true', () => {
    const result = scramble('keven', 'keven')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('keven compared to nicole returns false', () => {
    const result = scramble('keven', 'nicole')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('nicol compared to nicole returns false', () => {
    const result = scramble('nicol', 'nicole')
    const expected = false

    expect(result).toEqual(expected)
  })

})