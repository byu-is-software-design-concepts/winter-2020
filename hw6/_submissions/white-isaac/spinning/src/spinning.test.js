import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should spin words longer than 5 characters', () => {
    const result = spinWords('spider')
    const expected = 'redips'

    expect(result).toEqual(expected)
  })
  it('should only spin 5+ char words in mixed string', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
})
