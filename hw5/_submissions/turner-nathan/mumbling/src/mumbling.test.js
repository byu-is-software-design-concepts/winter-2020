import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // Return one character when given a short string.
  it('should return an uppercase character when given a character', () => {
    expect(createMumble('h')).toEqual('H')
  })

  // String with upper and lower case characters.
  it('should return the mumble pattern if given a string with upper/lower case characters', () => {
    const result = createMumble('tYuuGm')
    const expected = 'T-Yy-Uuu-Uuuu-Ggggg-Mmmmmm'

    expect(result).toEqual(expected)
  })
})
