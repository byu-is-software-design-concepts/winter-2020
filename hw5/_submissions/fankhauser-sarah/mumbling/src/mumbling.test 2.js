import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should return correct string with dashes', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
  it('should work given different capitalizations', () => {
    const result = createMumble('cwAt')
    const expected = 'C-Ww-Aaa-Tttt'

    expect(result).toEqual(expected)
  })
  it('should work with longer strings', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })
})
