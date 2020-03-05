import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('hello case three')
    const expected = 'helloCaseThree'

    expect(result).toEqual(expected)
  })
  it('should work with capital letters in the middle of words', () => {
    const result = convertToCamelCase('heLlo caSe')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
