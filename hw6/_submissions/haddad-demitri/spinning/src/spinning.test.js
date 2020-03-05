import { spinWords } from './spinning'

describe('When spinning words', () => {
  test('Not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  test('Spin all words over 5 characters', () => {
    const result = spinWords('Hallelujah brother')
    const expected = 'hajulellaH rehtorb'

    expect(result).toEqual(expected)
  })
  test('Sspin only words over 5 characters', () => {
    const result = spinWords('Hello brother what up today')
    const expected = 'olleH rehtorb what up yadot'

    expect(result).toEqual(expected)
  })

})