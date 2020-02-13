import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  test('test capitalize', () => {
    const result = createMumble('a')
    const expected = 'A'

    expect(result).toEqual(expected)
  })
  test('test amount based on indicides', () => {
    const result = createMumble('abc')
    const expected = 'A-Bb-Ccc'

    expect(result).toEqual(expected)
  })
  test('test amount based on indicides', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
})