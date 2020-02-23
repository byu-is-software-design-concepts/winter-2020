import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('should return true if portion of str1 can be rearranged and match str2', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('should return true if portion of str1 (with extra letters) can be rearranged and match str2', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})
