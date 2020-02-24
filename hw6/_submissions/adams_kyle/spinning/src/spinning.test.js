import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  }),
  it('should spin all words over 5 characters', () => {
    const result = spinWords('spinnnnn nowwwwwwww pleaseeeeee')
    const expected = 'nnnnnips wwwwwwwwon eeeeeesaelp'

    expect(result).toEqual(expected)
  }),
  it('should not spin any words if single under 5 characters', () => {
    const result = spinWords('no')
    const expected = 'no'

    expect(result).toEqual(expected)
  }),
  it('should not spin a single word if over 5 characters', () => {
    const result = spinWords('nooooooooooooooooooooooooo')
    const expected = 'ooooooooooooooooooooooooon'

    expect(result).toEqual(expected)
  })
})
