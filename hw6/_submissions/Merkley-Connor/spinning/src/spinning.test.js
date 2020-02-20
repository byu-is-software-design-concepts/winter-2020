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

  it('should spin only words that are 5 letters and over and a longer sentance', () => {
    const result = spinWords('Stop please and listen to the Spinning of My Words')
    const expected = 'Stop esaelp and netsil to the gninnipS of My sdroW'

    expect(result).toEqual(expected)
  })
})
