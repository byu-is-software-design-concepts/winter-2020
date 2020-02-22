import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('great tests require smart people')
    const expected = 'taerg stset eriuqer trams elpoep'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('I am bad with small tests')
    const expected = 'I am bad with llams stset'

    expect(result).toEqual(expected)
  })
})
