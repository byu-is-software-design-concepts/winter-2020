import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('should return 3 as the 4th value', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })

  it('should return 610 as the 15th value', () => {
    const result = getFibNumber(15)
    const expected = 610

    expect(result).toEqual(expected)
  })

  it('should return 19 as the 9th value', () => {
    const result = getFibNumber(9)
    const expected = 34

    expect(result).toEqual(expected)
  })
})
