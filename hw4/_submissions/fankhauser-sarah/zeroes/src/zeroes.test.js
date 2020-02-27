import { moveZeroesToEnd } from './zeroes'

describe('When moving zeroes to the end', () => {
  it('should move the zeroes with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })
  it('should move the zeroes with an array of random types', () => {
    const result = moveZeroesToEnd([3, 0, 2, 0, false, 'hello', 1])
    const expected = [3, 2, false, 'hello', 1, 0, 0]

    expect(result).toEqual(expected)
  })
  it('should move the zeroes with an array of random types and long', () => {
    const result = moveZeroesToEnd([false,1,0,1,2,0,1,3,'a',1,0,5,'hello',true])
    const expected = [false,1,1,2,1,3,'a',1,5,'hello',true,0,0,0]

    expect(result).toEqual(expected)
  })
})
