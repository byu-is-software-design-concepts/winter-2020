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
  it('should mumble a word of 3 of the same letters', () => {
    const result = createMumble('Eee')
    const expected = 'E-Ee-Eee'

    expect(result).toEqual(expected)
  })
  it('should acoomodate uppercase and lowercase letters', () => {
    const result = createMumble('ABcDE')
    const expected = 'A-Bb-Ccc-Dddd-Eeeee'

    expect(result).toEqual(expected)
  })
})
