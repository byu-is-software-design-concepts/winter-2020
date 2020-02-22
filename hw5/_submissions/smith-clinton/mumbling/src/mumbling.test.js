import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should add the dashes', () => {
    const result = createMumble('cwAt')
    const expected = 'C-Ww-Aaa-Tttt'
  })
  it('should add dashes and fix case issues', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
  })
  // TODO: Add more tests
})
