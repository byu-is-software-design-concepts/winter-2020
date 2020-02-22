import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return 1 as the third value', () => {
    const result = getFibNumber(2)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return 610 as the 16th value', () => {
    const result = getFibNumber(15)
    const expected = 610

    expect(result).toEqual(expected)
  })
})
