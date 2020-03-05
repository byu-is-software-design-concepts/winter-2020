import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'
    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('This Is sparta')
    const expected = 'thisIsSparta'
    expect(result).toEqual(expected)
  })
  it('should convert five words', () => {
    const result = convertToCamelCase('This Is not sparta City')
    const expected = 'thisIsNotSpartaCity'
    expect(result).toEqual(expected)
  })
})
