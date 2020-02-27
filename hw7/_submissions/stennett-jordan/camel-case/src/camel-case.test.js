import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  it('should convert four words', () => {
    const result = convertToCamelCase('My caMel cAse worD')
    const expected = 'myCamelCaseWord'

    expect(result).toEqual(expected)
  })
})
