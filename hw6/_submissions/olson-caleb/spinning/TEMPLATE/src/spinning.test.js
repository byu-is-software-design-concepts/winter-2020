import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  }),
  it('should spin only words that are 5 letters and over', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  }),
  it('should reverse words if they are over 5 and not if under 5', () => {
    const result = spinWords('Please spin me tomorrow');
    const expected = 'esaelP spin me worromot';

    expect(result).toEqual(expected);
  })
})
