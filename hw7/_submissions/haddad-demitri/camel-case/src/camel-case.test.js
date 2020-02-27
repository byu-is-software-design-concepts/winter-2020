import { convertToCamelCase } from './camel-case'

describe('When converting to camel case', () => {
  test('should return lowercase single word', () => {
    const result = convertToCamelCase('Hello')
    const expected = 'hello'

    expect(result).toEqual(expected)
  })

   test('should convert two words', () => {
     const result = convertToCamelCase('hello world')
     const expected = 'helloWorld'

     expect(result).toEqual(expected)
   })

   test('should convert multiple words', () => {
     const result = convertToCamelCase('hello World test')
     const expected = 'helloWorldTest'

     expect(result).toEqual(expected)
   })

})
