import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case again')
    const expected = 'helloCaseAgain'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
