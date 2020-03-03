import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  
  it('should convert three words', () => {
    const result = convertToCamelCase('hello world case')
    const expected = 'helloWorldCase'

    expect(result).toEqual(expected)
  })
  it('should return a blank string', () => {
    const result = convertToCamelCase('')
    const expected = ''

    expect(result).toEqual(expected)
  })
})
