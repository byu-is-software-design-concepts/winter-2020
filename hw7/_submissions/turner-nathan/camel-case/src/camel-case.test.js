import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  it('converts several words', () => {
    const result = convertToCamelCase('hello world case stuff')
    const expected = 'helloWorldCaseStuff'

    expect(result).toEqual(expected)
  })

  it('only allows the first letter of a word to be capitalized', () => {
    const result = convertToCamelCase('tHiS WilL bE fIXED')
    const expected = 'thisWillBeFixed'

    expect(result).toEqual(expected)
  })
})
