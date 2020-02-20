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
  test('should convert large sentences to camel case', () => {
    const result = convertToCamelCase('adapt this line at the top of each loop')
    const expected = 'adaptThisLineAtTheTopOfEachLoop'

    expect(result).toEqual(expected)
  })
})
