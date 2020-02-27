import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('please spin now')
    const expected = 'esaelp spin now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('please spinning yeeeeeah')
    const expected = 'esaelp gninnips haeeeeey'

    expect(result).toEqual(expected)
  })
})
