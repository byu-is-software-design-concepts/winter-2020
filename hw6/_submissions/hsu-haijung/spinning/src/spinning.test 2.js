import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('yes spinning now')
    const expected = 'yes gninnips now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('hello')
    const expected = 'olleh'

    expect(result).toEqual(expected)
  })
})
