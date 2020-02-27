import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('hello case test')
    const expected = 'helloCaseTest'

    expect(result).toEqual(expected)
  })
  it('should return an empty string when empty', () => {
    const result = convertToCamelCase('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should format capitalized letters in words', () => {
    const result = convertToCamelCase('hEllO caSE')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
