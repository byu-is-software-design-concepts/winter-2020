import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  }),
  it('should convert four words', () => {
    const result = convertToCamelCase('my camel case word')
    const expected = 'myCamelCaseWord'

    expect(result).toEqual(expected)
  }),
  it('should return an error if the input string is empty', () => {
    const result = convertToCamelCase('')
    const expected = 'Please enter words to be converted to camelCase'

    expect(result).toEqual(expected)
  }),
  it('should return an error if there is only one input word', () => {
    const result = convertToCamelCase('camel')
    const expected = 'Please enter more than one word to be converted to camelCase'

    expect(result).toEqual(expected)
  })
})
