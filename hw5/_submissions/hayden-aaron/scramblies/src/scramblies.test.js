import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('simple world example', () => {
    const result = scramble('rkqodlw', 'world')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('jazz example', () => {
    const result = scramble('utahjautahzz', 'jazz')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('false example', () => {
    const result = scramble('jazt', 'jazz')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('jazz false example', () => {
    const result = scramble('jazzjazzjazz', 'jazzjazzjazzjazz')
    const expected = false

    expect(result).toEqual(expected)
  })
  it('another one just for fun', () => {
    const result = scramble('tousihterugifotgniogrevenmai', 'iamnevergoingtofigurethisout')
    const expected = true

    expect(result).toEqual(expected)
  })
})
