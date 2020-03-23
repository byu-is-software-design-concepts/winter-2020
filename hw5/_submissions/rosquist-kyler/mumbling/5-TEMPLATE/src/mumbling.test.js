import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should mumble a word of 3 letters', () => {
    const result = createMumble('tom')
    const expected = 'T-Oo-Mmm'

    expect(result).toEqual(expected)
  })

  it('should mumble a word of 7 letters', () => {
    const result = createMumble('RqaEzty')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

    expect(result).toEqual(expected)
  })

  it('should mumble a word of however many letters are in the string below', ()=> {
    const result = createMumble('kQYajenNJJJklskd');
    const expected = 'K-Qq-Yyy-Aaaa-Jjjjj-Eeeeee-Nnnnnnn-Nnnnnnnn-Jjjjjjjjj-Jjjjjjjjjj-Jjjjjjjjjjj-' +
                      'Kkkkkkkkkkkk-Lllllllllllll-Ssssssssssssss-Kkkkkkkkkkkkkkk-Dddddddddddddddd-Iiiiiiiiiiiiiiiii';
  })
})
