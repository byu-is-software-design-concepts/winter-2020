import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  it('should convert two words', () => {
    const result = convertToCamelCase('hello case')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('should convert nothing', () => {
    const result = convertToCamelCase('helloCase')
    const expected = 'helloCase'

    expect(result).toEqual(expected)
  })

  it('This one is just blank', () => {
    const result = convertToCamelCase('')
    const expected = ''

    expect(result).toEqual(expected)
  })

  it('should convert four words', () => {
    const result = convertToCamelCase('hello case chicken pizza')
    const expected = 'helloCaseChickenPizza'

    expect(result).toEqual(expected)
  })

  it('should convert six words', () => {
    const result = convertToCamelCase('hello case chicken pizza waffles monkeys')
    const expected = 'helloCaseChickenPizzaWafflesMonkeys'

    expect(result).toEqual(expected)
  })
})
