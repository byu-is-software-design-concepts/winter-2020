import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert multiple words', () => {
    const result = convertToCamelCase('my camel case word')
    const expected = 'myCamelCaseWord'

    expect(result).toEqual(expected)
  })
  it('should correct capitilization errors too', () => {
    const result = convertToCamelCase('I lOVe cAndY')
    const expected = 'iLoveCandy'

    expect(result).toEqual(expected)
  })
})
