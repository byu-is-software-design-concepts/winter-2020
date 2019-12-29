import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'HelloCase'

    expect(result).toEqual(expected)
  })
  it('should convert large sentences', () => {
    const result = convertToCamelCase('how are you on this fine day')
    const expected = 'HowAreYouOnThisFineDay'

    expect(result).toEqual(expected)
  })
})
