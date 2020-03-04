import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three or more words', () => {
    const result = convertToCamelCase('hello case number three')
    const expected = 'helloCaseNumberThree'

    expect(result).toEqual(expected)
  })
  it('should change first capital to lowercase', () => {
    const result = convertToCamelCase('Hello case three')
    const expected = 'helloCaseThree'

    expect(result).toEqual(expected)
  })
  
})
