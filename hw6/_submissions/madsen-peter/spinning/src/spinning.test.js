import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })

  // TODO: Add more tests
  it('should reverse the words if they are over 5 characters', () => {
    const result = spinWords('Please spinning tomorrow');
    const expected = 'esaelP gninnips worromot';

    expect(result).toEqual(expected);
  }),

  it('should reverse words if they are over 5 and not if under 5', () => {
    const result = spinWords('Please spin me tomorrow');
    const expected = 'esaelP spin me worromot';

    expect(result).toEqual(expected);
  })

  it('every other word should spin', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
})
})
