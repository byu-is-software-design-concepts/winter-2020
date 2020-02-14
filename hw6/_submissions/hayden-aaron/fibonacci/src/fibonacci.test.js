import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return 1 as the first value', () => {
    const result = getFibNumber(1)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return 3 as the fourth value', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })
  it('should return 8 as the sixth value', () => {
    const result = getFibNumber(6)
    const expected = 8

    expect(result).toEqual(expected)
  })
  it('should return 610 as the fifteenth value', () => {
    const result = getFibNumber(15)
    const expected = 610

    expect(result).toEqual(expected)
  })
})
