import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should spin with any words if over 5 characters', () => {
    const result = spinWords('spinning testing correctly')
    const expected = 'gninnips gnitset yltcerroc'

    expect(result).toEqual(expected)
  })
  it('should spin with mix of words over and under 5 characters', () => {
    const result = spinWords('spinning test correctly')
    const expected = 'gninnips test yltcerroc'

    expect(result).toEqual(expected)
  })
})
