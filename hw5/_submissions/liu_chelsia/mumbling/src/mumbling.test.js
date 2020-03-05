import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // The following three tests are the exact same, but with different inputs to test different use cases
  it('should return a string with upper and lowercase letters and more letters each time -- Use Case 1', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
  it('should return a string with upper and lowercase letters and more letters each time -- Use Case 2', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })
  it('should return a string with upper and lowercase letters and more letters each time -- Use Case 3', () => {
    const result = createMumble('cwAt')
    const expected = 'C-Ww-Aaa-Tttt'

    expect(result).toEqual(expected)
  })
})
