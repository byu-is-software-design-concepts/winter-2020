import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests

  it('should return A when passed a', () => {
    const result = createMumble('a')
    const expected = 'A'

    expect(result).toEqual(expected)
  })

  it('should return A-Bb-Ccc when passed aBc', () => {
    const result = createMumble('aBc')
    const expected = 'A-Bb-Ccc'

    expect(result).toEqual(expected)
  })

  it('should return X-Tt-Fff-Dddd-Aaaaa when passed xTfDA', () => {
    const result = createMumble('xTfDA')
    const expected = 'X-Tt-Fff-Dddd-Aaaaa'

    expect(result).toEqual(expected)
  })
})
