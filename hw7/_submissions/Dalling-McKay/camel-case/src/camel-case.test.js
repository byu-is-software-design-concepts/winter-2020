import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert 5 words', () => {
    const result = convertToCamelCase('hello there how are you')
    const expected = 'helloThereHowAreYou'

    expect(result).toEqual(expected)
  })
  it('should convert 10 words', () => {
    const result = convertToCamelCase('hello I hope you are well on this fine day')
    const expected = 'helloIHopeYouAreWellOnThisFineDay'

    expect(result).toEqual(expected)
  })
  it('should convert first letter of first word to lowercase', () => {
    const result = convertToCamelCase('Hello everyone')
    const expected = 'helloEveryone'

    expect(result).toEqual(expected)
  })

})
