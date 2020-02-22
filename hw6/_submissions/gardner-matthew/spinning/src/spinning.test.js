import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })

  it('"hello world" should return "olleh dlrow"', () => {
    const result = spinWords('hello world')
    const expected = 'olleh dlrow'

    expect(result).toEqual(expected)
  })

  it('"I love burgers" should return "I love sregrub', () => {
    const result = spinWords('I love burgers')
    const expected = 'I love sregrub'

    expect(result).toEqual(expected)
  })
})
