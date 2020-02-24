import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should spin for one word', () => {
    const result = spinWords('Spinning')
    const expected = "gninnipS"

    expect(result).toEqual(expected)
  })
  it('should spin for many words some five characters others not', () => {
    const result = spinWords("Stop Spinning My Words")
    const expected = "Stop gninnipS My sdroW"

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})
