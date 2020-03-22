import { moveZeroesToEnd } from './zeroes' // TODO: Update this file to yours

describe('When moving zeroes to the end', () => {
  it('should move the zeroes with an array of numbers', () => {
    const result = moveZeroesToEnd([3, 0, 2, 1])
    console.log(result)
    const expected = [3, 2, 1, 0]
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('should move the zeroes with an array of random types', () => {
    const result = moveZeroesToEnd([3, 0, 2, 0, false, 'hello', 1])
    console.log(result)
    const expected = [3, 2, false, 'hello', 1, 0, 0]
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('should move 0 to the end from the beginning', ()=> {
    const result =moveZeroesToEnd([0,1,2,3,4])
    console.log(result)
    const expected = [1,2,3,4,0]
    console.log(expected)
  })
  it('should leave a blank spot in array', ()=> {
    const result =moveZeroesToEnd([0,0,0,,4])
    console.log(result)
    const expected = [,4,0,0,0]
    console.log(expected)
  })
  it('should leave a blank spot and tt to start in array', ()=> {
    const result =moveZeroesToEnd(['tt',0,0,,4])
    console.log(result)
    const expected = ['tt',,4,0,0]
    console.log(expected)
  })
})
