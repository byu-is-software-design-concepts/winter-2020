import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should spin stopping, spinning, and words', () => {
    const result = spinWords('Stopping Spinning My Words')
    const expected = 'gnippotS gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
})
