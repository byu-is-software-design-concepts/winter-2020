import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert lots of words', () => {
    const result = convertToCamelCase('my camel case word with other stuff')
    const expected = 'myCamelCaseWordWithOtherStuff'

    expect(result).toEqual(expected)
  })
})
