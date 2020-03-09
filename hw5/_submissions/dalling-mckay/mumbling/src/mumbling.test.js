import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('"ABC" returns "ABBCCC"', () => {
    const result = createMumble('ABC')
    const expected = 'ABBCCC'

    expect(result).toEqual(expected)
  })

  it('"AZBYC" returns "AZZBBBYYYYCCCCC"', () => {
    const result = createMumble('AZBYC')
    const expected = 'AZZBBBYYYYCCCCC'

    expect(result).toEqual(expected)
  })
})
