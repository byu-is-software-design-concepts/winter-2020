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

  it('should mumble a word of repeating letters', () => {
    const result = createMumble('RqaEztyy')
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy-Yyyyyyyy'

    expect(result).toEqual(expected)
  })
  
  it('should mumble a word of all capital repeating letters', () => {
    const result = createMumble('EEEE')
    const expected = 'E-Ee-Eee-Eeee'

    expect(result).toEqual(expected)
  })

})
