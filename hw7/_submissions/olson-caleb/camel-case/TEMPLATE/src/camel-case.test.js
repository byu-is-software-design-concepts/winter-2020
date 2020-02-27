import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert large sentences', () => {
    const result = convertToCamelCase('how are you on this fine day')
    const expected = 'howAreYouOnThisFineDay'

    expect(result).toEqual(expected)
  })
  it('should handle uppercase words in sentences', () => {
    const result = convertToCamelCase('Hello where will Ferguson be in March')
    const expected = 'helloWhereWillFergusonBeInMarch'

    expect(result).toEqual(expected)
  })
})
