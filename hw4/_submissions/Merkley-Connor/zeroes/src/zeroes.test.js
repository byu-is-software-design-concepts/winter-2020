import { moveZeroesToEnd } from './zeroes'

describe('moveZeroesToEnd', () => {
  it('should move one zero to the end with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    const expected = [3, 2, 1, 0]

    expect(result).toEqual(expected)
  })

    it('should put multiple zeroes at the end', () => {
      const result = moveZeroesToEnd([3, 0, 1, 0, 5, 6])
      const expected = [3, 1, 5, 6, 0, 0]
  
      expect(result).toEqual(expected)
    })

      it('should handle a string value and still put the zeroes at the end', () => {
        const result = moveZeroesToEnd([3, 0, 2, 1, 'hello', 0 , 3 , 1])
        const expected = [3, 2, 1, 'hello', 3, 1, 0, 0]
    
        expect(result).toEqual(expected)
      })
})