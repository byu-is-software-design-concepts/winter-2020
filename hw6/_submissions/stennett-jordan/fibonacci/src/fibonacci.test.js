import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })

  it('return 34', () => {
    const result = getFibNumber(9)
    const expected = 34

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
})
