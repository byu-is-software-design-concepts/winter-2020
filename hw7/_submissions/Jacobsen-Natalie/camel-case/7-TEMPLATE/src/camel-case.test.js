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
  it('single words should stay the same', () => {
    const result = convertToCamelCase('donkey')
    const expected = 'donkey'

    expect(result).toEqual(expected)
  })
  it('words with capitals should still work', () => {
    const result = convertToCamelCase('HOW arE You ON tHIs FIne daY')
    const expected = 'howAreYouOnThisFineDay'

    expect(result).toEqual(expected)
  })
})
