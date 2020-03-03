import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert three words', () => {
    const result = convertToCamelCase('my name is aaron')
    const expected = 'myNameIsAaron'

    expect(result).toEqual(expected)
  })
  it('should convert eight words', () => {
    const result = convertToCamelCase('who am i to understand what is happening')
    const expected = 'whoAmIToUnderstandWhatIsHappening'

    expect(result).toEqual(expected)
  })
})
