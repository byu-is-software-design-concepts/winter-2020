import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should spin any words if 5 or more characters', () => {
    const result = spinWords('Stopping Spinning')
    const expected = 'gnippotS gninnipS'

    expect(result).toEqual(expected)
  })
  it('should spin any words if 5 or more characters and not spin words under 5 characters', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
  
})
