import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('I love chicken')
    const expected = 'iLoveChicken'

    expect(result).toEqual(expected)
  })
  it('should leave one word alone', () => {
    const result = convertToCamelCase('what')
    const expected = 'what'

    expect(result).toEqual(expected)
  })
  it('should convert an entire sentence', () => {
    const result = convertToCamelCase('the quick brown fox jumped over the lazy dog')
    const expected = 'theQuickBrownFoxJumpedOverTheLazyDog'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
