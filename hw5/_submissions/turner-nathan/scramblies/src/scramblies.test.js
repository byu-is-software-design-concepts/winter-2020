import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  
  it('tests false condition', () => {
    expect(scramble('h', 't')).toEqual(false)
  })

  it('tests length condition', () => {
    expect(scramble('no', 'nono')).toEqual(false)
  })

  it('tests the true condition, ignoring case', () => {
    expect(scramble('ith', 'Hi')).toEqual(true)
  })

  it('requires that repeat letters exist, if necessary', () => {
    expect(scramble('ith', 'Hii')).toEqual(false)
  })
})
