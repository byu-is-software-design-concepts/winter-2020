import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 1 as the second value', () => {
    const result = getFibNumber(2)
    const expected = 1

    expect(result).toEqual(expected)
  })
  it('should return 3 as the fourth value', () => {
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })
  it('should return 1597 as the seventeenth value', () => {
    const result = getFibNumber(17)
    const expected = 1597

    expect(result).toEqual(expected)
  })
})
