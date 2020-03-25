import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('should convert three words', () => {
    const result = convertToCamelCase('heLLo there caSe')
    const expected = 'helloThereCase'

    expect(result).toEqual(expected)
  })

  it('should convert one words', () => {
    const result = convertToCamelCase('fatBoy')
    const expected = 'fatboy'

    expect(result).toEqual(expected)
  })
})
