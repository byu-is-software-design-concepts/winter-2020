import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  }),
  it('should return true for a longer phrase large sentences', () => {
    const result = convertToCamelCase('hey you over there yes you')
    const expected = 'heyYouOverThereYesYou'

    expect(result).toEqual(expected)
  })
})
