import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })

  it('should return the correct value', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })

  it('should return the correct value', () => {
    const result = createMumble('cwAt')
    const expected = 'C-Ww-Aaa-Tttt'

    expect(result).toEqual(expected)
  })
})
