import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('hello case NOT')
    const expected = 'helloCaseNot'

    expect(result).toEqual(expected)
  })
  it('should convert two words from all uppercase', () => {
    const result = convertToCamelCase('HELLO CASE')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case get me the bacon')
    const expected = 'helloCaseGetMeTheBacon'

    expect(result).toEqual(expected)
  })
})
