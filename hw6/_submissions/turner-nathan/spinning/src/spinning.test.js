import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
  it('should spin words of 5 or more characters', () => {
    expect(spinWords('Birds flying really Legit')).toEqual('sdriB gniylf yllaer tigeL')
  })

  it('handles mixed cases', () => {
    expect(spinWords('This sentence is complete')).toEqual('This ecnetnes is etelpmoc')
  })
})
