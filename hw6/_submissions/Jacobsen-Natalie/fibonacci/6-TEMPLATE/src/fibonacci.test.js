import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return the correct number for low values', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })
  it('should return the correct number for higher values', () => {
    const result = getFibNumber(15)
    const expected = 610

    expect(result).toEqual(expected)
  })
  it('should return the correct number for 1', () => {
    const result = getFibNumber(1)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return the correct number for really high numbers', () => {
    const result = getFibNumber(60)
    const expected = 1548008755920

    expect(result).toEqual(expected)
  })
})
