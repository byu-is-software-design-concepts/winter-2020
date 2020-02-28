import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert words', () => {
    const result = convertToCamelCase('long ago the four nations lived together in harmony')
    const expected = 'longAgoTheFourNationsLivedTogetherInHarmony'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
