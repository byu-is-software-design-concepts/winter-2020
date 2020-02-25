import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should capitalize the first letter of each entry', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
  it('should add hyphens between each letter', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })
  it('should increase each letters frequency by one', () => {
    const result = createMumble('abcd')
    const expected = 'A-Bb-Ccc-Dddd'

    expect(result).toEqual(expected)
  })

})
