import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should capitalize the first letter', () => {
    const result = createMumble('a')
    const expected = 'A'

    expect(result).toEqual(expected)
  })
  it('should insert the dash and print the second char one more time', () => {
    const result = createMumble('ab')
    const expected = 'A-Bb'

    expect(result).toEqual(expected)
  })
  
  it('should handle long strings', () => {
    const result = createMumble('RqaEzty')
    const expected = "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

    expect(result).toEqual(expected)
  })
})
