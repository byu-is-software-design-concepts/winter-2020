import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  
  it('test capitalized letters', () => {
    const result = createMumble('a')
    const expected = 'A'

    expect(result).toEqual(expected)
  })

  it('test amount based on indices', () => {
    const result = createMumble('abc')
    const expected = 'A-Bb-Ccc'

    expect(result).toEqual(expected)
  })

})
