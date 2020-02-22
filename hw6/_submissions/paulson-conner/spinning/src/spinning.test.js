import { spinWords } from './spinning';

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('not');
    const expected = 'not';

    expect(result).toEqual(expected);
  });

  it('should spin words greater than or equal to 5 characters', () => {
    const result = spinWords('should');
    const expected = 'dluohs';

    expect(result).toEqual(expected);
  });

  it('should include spaces between words', () => {
    const result = spinWords('it should');
    const expected = 'it dluohs';

    expect(result).toEqual(expected);
  });

  it('should not include leading or trailing whitespace', () => {
    const result = spinWords(' should not ');
    const expected = 'dluohs not';

    expect(result).toEqual(expected);
  });

  it('should pass the example test case', () => {
    const result = spinWords('Stopping Spinning My Words');
    const expected = 'gnippotS gninnipS My sdroW';

    expect(result).toEqual(expected);
  });
});
