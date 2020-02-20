import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0);
    const expected = 0;

    expect(result).toEqual(expected);
  }),
  it('should return 1 if the number is 1', () => {
    const result = getFibNumber(1);
    const expected = 1;

    expect(result).toEqual(expected);
  }),
  it('should return 1 if the number is 2', () => {
    const result = getFibNumber(2);
    const expected = 1;

    expect(result).toEqual(expected);
  }),
  it('should return 2 if the number is 3', () => {
    const result = getFibNumber(3);
    const expected = 2;

    expect(result).toEqual(expected);
  }),
  it('should return 11 if given 7', () => {
    const result = getFibNumber(7);
    const expected = 13;

    expect(result).toEqual(expected);
  })
});