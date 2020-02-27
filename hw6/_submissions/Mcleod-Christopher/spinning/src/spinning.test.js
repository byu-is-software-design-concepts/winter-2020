import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should spin 1 word over 5 characters', () => {
    const result = spinWords('One Word Spinning')
    const expected = 'One Word gninnipS'

    expect(result).toEqual(expected)
  })

  it('should spin 2 words over 5 characters', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })

  it('should spin all the words over 5 characters', () => {
    const result = spinWords('Spinning Around Forever Alone')
    const expected = 'gninnipS dnuorA reveroF enolA'

    expect(result).toEqual(expected)
  })
})
