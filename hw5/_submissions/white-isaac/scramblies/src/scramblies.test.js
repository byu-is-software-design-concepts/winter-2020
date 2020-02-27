import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true if just the word was scrambled', () => {
    const result = scramble('wrold', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true if extra letters were added', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false if duplicate letters are not found', () => {
    const result = scramble('ladgoaesnwd', 'woodland')
    const expected = false

    expect(result).toEqual(expected)
  })
  
  it('should return false if duplicate letters are found', () => {
    const result = scramble('ladgoaesonwd', 'woodland')
    const expected = true

    expect(result).toEqual(expected)
  })
})
