import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('"This is really cool" should only reverse "really"', () => {
    const result = spinWords('This is really cool')
    const expected = 'This is yllaer cool'

    expect(result).toEqual(expected)
  })
  it('"Dont forget to drink your Ovaltine" should only reverse "forget", "drink", and "Ovaltine"', () => {
    const result = spinWords('Dont forget to drink your Ovaltine')
    const expected = 'Dont tegrof to knird your enitlavO'

    expect(result).toEqual(expected)
  })
})
