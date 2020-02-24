import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  
  it('Should work with abcd', () => {
    const result = createMumble('abcd');
    const expected = 'A-Bb-Ccc-Dddd';

    expect(result).toEqual(expected);
  })

  it('should work with 7 letters', () => {
    const result = createMumble('RqaEzty');
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy';

    expect(result).toEqual(expected);
  })

  it('should work with a single letter', () => {
    const result = createMumble('a');
    const expected = 'A';

    expect(result).toEqual(expected);
  });
})
