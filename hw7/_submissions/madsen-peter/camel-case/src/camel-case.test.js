import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests

  it('my camel case word should return myCamelCaseWord', () => {
    const result = convertToCamelCase('my camel case word')
    const expected = 'myCamelCaseWord'

    expect(result).toEqual(expected)
  })

  it('sup should return sup', () => {
    const result = convertToCamelCase('sup')
    const expected = 'sup'

    expect(result).toEqual(expected)
  })
})
