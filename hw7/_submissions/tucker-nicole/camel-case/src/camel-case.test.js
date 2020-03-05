import {
  convertToCamelCase
} from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  // More tests
  it('my camel case word my should convert go myCamelCaseWord', () => {
    const result = convertToCamelCase('my camel case word')
    const expected = 'myCamelCaseWord'

    expect(result).toEqual(expected)
  })

  it('I LOVE KEVEN my should convert go iLoveKeven', () => {
    const result = convertToCamelCase('I LOVE KEVEN')
    const expected = 'iLoveKeven'

    expect(result).toEqual(expected)
  })

  it('CaMeL cAsE iS vErY fUn my should convert go camelCaseIsVeryFun', () => {
    const result = convertToCamelCase('CaMeL cAsE iS vErY fUn')
    const expected = 'camelCaseIsVeryFun'

    expect(result).toEqual(expected)
  })


})