import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })

  it('should spin one word when 5 characters or longer', () => {
    const result = spinWords('Spinning')
    const expected = 'gninnipS'
  })

  it('should spin only the words that are 5 characters or longer', () => {
    const result = spinWords('Spinning the large words')
    const expected = 'gninnipS the egral wsdrow'
  })
  // TODO: Add more tests
})
