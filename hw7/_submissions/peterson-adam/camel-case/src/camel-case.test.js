import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  it('should convert 5 words', () => {
    const result = convertToCamelCase('hello case thing bug plant')
    const expected = 'helloCaseThingBugPlant'

    expect(result).toEqual(expected)
  })
})
