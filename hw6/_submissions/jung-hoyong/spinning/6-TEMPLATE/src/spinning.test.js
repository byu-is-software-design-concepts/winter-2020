import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should spin only words that are 5 letters and over', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
  test('should return a readable sentence', () => {
    const result = spinWords('annaW esaec esoht yzarc dleif skrow')
    const expected = 'Wanna cease those crazy field works'

    expect(result).toEqual(expected)
  })
})
