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
  it('should spin one word that is 5 letters or longer', () => {
    const result = spinWords('Shenanigans')
    const expected = 'snaginanehS'

    expect(result).toEqual(expected)
  })
  it("shouldn't spin one word that is shorter than 5 letters", () => {
    const result = spinWords('cow')
    const expected = 'cow'

    expect(result).toEqual(expected)
  })
})
