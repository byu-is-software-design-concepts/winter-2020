import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should return A-Bb-Ccc', () => {
    const result = createMumble('abc')
    const expected = 'A-Bb-Ccc'

    expect(result).toEqual(expected)
  })
})
