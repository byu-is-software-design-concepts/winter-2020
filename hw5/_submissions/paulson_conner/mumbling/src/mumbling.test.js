/* global describe, it, expect */
import { createMumble } from './mumbling';

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('');
    const expected = '';

    expect(result).toEqual(expected);
  });

  it('should return a single capital A when given a single a', () => {
    const result = createMumble('a');
    const expected = 'A';

    expect(result).toEqual(expected);
  });

  it('should return A-Bb when given ab', () => {
    const result = createMumble('ab');
    const expected = 'A-Bb';

    expect(result).toEqual(expected);
  });

  it('should return the correct value for RqaEzty', () => {
    const result = createMumble('RqaEzty');
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy';

    expect(result).toEqual(expected);
  });
});
