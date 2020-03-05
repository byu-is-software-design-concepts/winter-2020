import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should return the correct input string with dashes', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'
  })
  it('should return the more complicated string with uppercase in original', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
  })
  // TODO: Add more tests
})
