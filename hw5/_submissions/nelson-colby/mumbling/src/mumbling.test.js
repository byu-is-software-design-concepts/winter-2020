import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should return an A-Bb-Ccc when given abc', () => {
    const result = createMumble('abc')
    const expected = 'A-Bb-Ccc'

    expect(result).toEqual(expected)
  })
  it('should return the same letter in two parts an A-Aa-Bbb-Cccc when given aabc', () => {
    const result = createMumble('aabc')
    const expected = 'A-Aa-Bbb-Cccc'

    expect(result).toEqual(expected)
  })
  it('should return the correct string "C" when given "c"', () => {
    const result = createMumble('c')
    const expected = 'C'

    expect(result).toEqual(expected)
  })
  it('should return the correct string "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" when given "RqaEzty"', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })
})
