import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
    it('should return a mumbling when given letters', () => {
        const result = createMumble('abcd')
        const expected = 'A-Bb-Ccc-Dddd'

        expect(result).toEqual(expected)
    })
})
