import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should mumble a word of 3 letters', () => {
    const result = createMumble('tom')
    const expected = 'T-Oo-Mmm'

    expect(result).toEqual(expected)
  })
  it('should mumble a word of 7 letters', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
})