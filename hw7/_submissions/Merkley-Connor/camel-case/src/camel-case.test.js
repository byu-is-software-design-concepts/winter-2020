import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('This is not a drill')
    const expected = 'thisIsNotADrill'
    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('hello bobby')
    const expected = 'helloBobby'
    expect(result).toEqual(expected)
  })
})
