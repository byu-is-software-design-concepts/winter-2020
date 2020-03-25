import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert a single upper-case word', () => {
    const result = convertToCamelCase('BUTTONS')
    const expected = 'buttons'

    expect(result).toEqual(expected)
  })
  it('should convert many words', () => {
    const result = convertToCamelCase('Hi ThErE BUDDY hOw ArrRre YOU doin?')
    const expected = 'hiThereBuddyHowArrrreYouDoin?'

    expect(result).toEqual(expected)
  })
})
