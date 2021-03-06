import createMumble from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('zfa')
    const expected = 'Z-Ff-Aaa'

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})
