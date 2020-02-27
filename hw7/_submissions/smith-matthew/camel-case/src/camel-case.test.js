import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert one word', () => {
    const result = convertToCamelCase('hello')
    const expected = 'hello'

    expect(result).toEqual(expected)
  })
  it('should convert two words with all caps', () => {
    const result = convertToCamelCase('HELLO WORLD')
    const expected = 'helloWorld'

    expect(result).toEqual(expected)
  })
})
