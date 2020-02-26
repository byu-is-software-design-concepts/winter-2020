import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return 1 as the second value', () => {
    const result = getFibNumber(1)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return 1 as the third value', () => {
    const result = getFibNumber(2)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return 2 as the fourth value', () => {
    const result = getFibNumber(3)
    const expected = 2

    expect(result).toEqual(expected)
  })
  it('should return 3 as the fifth value', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })
  it('should return 5 as the sixth value', () => {
    const result = getFibNumber(5)
    const expected = 5

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  
})
