import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('returns 3 for the fourth value', () => {
    expect(getFibNumber(4)).toEqual(3)
  })

  it('returns 610 for the fifteenth value', () => {
    expect(getFibNumber(15)).toEqual(610)
  })
})
