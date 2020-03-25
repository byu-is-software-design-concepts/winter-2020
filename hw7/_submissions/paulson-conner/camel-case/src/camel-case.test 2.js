import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  it('should handle words with weird casing', () => {
    const result = convertToCamelCase('hEllO CasE')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  it('should convert three words', () => {
    const result = convertToCamelCase('hello case world')
    const expected = 'helloCaseWorld'

    expect(result).toEqual(expected)
  });

  it('should return one word as is', () => {
    const result = convertToCamelCase('hello')
    const expected = 'hello'

    expect(result).toEqual(expected)
  });
})
