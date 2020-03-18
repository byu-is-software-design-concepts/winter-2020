import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert large sentences', () => {
    const result = convertToCamelCase('this is a long sentence that continues to run on and on and on and on and on and on')
    const expected = 'thisIsALongSentenceThatContinuesToRunOnAndOnAndOnAndOnAndOnAndOn'

    expect(result).toEqual(expected)
  })
  it('should handle uppercase words in sentences', () => {
    const result = convertToCamelCase('this is a Long Sentence that continues to Run on and on and on and on and on and on')
    const expected = 'thisIsALongSentenceThatContinuesToRunOnAndOnAndOnAndOnAndOnAndOn'

    expect(result).toEqual(expected)
  })
})
