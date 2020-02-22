import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  test('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  
  test('Testing an simple string ABC', () => {
    const result = uniqueInOrder('ABC')
    const expected = ["A", "B", "C"]

    expect(result).toEqual(expected)
  })

  test('Testing duplicated letters AABBCCCC', () => {
    const result = uniqueInOrder('AABBCCCC')
    const expected = ["A", "B", "C"]

    expect(result).toEqual(expected)
  })

  // test('Testing palindrome AABBCCCC', () => {
  //   const result = uniqueInOrder('AABBCCBBAA')
  //   const expected = ["A", "B", "C", "B", "A"]

  //   expect(result).toEqual(expected)
  // })


})
