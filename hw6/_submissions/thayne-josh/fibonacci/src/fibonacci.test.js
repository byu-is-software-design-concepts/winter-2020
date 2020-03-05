import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return 3 as the 4th value', () => {
    const result = getFibNumber(4)
    const exptected = 3
  })
  it('should return 987 as the 16th value', () => {
    const result = getFibNumber(16)
    const expecte = 987
  })
    
})
