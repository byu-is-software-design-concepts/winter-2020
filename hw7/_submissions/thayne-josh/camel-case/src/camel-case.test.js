import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should not convert one word', () => {
    const result = convertToCamelCase('hello')
    const expected = 'hello'

    expect(result).toEqual(expected)
  })
})
