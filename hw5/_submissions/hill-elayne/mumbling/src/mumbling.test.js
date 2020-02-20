import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should capitalize first letter and display the number of letters for the indexOf each character in a string', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
  it('should work when given both uppercase and lowercase letters', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })
  it('should should work when given uppercase and lowercase letters', () => {
    const result = createMumble('cwAt')
    const expected = 'C-Ww-Aaa-Tttt'

    expect(result).toEqual(expected)
  })
})
