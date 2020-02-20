import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should reverse the words if they are over 5 characters', () => {
    const result = spinWords('Please spinning tomorrow');
    const expected = 'esaelP gninnips worromot';

    expect(result).toEqual(expected);
  })
})