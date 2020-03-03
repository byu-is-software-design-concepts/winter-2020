import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert two words', () => {
    const result = convertToCamelCase('Hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert two words', () => {
    const result = convertToCamelCase('HELLO CASE')
    const expected = 'hELLOCASE'

    expect(result).toEqual(expected)
  })
  it('should convert more than two words', () => {
    const result = convertToCamelCase('hello case in js')
    const expected = 'helloCaseInJs'

    expect(result).toEqual(expected)
  })
})
