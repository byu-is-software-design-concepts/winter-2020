import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  test('Should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  
  test('Return 3 as the fourth value', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })

  test('Return 1 as the second value', () => {
    const result = getFibNumber(2)
    const expected = 1

    expect(result).toEqual(expected)
  })
})