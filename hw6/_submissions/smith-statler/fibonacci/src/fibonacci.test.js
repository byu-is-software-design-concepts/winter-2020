import { getFibNumber } from './fibonacci'

describe('When getting the fibonacci number', () => {
  it('should return 0 as the first value', () => {
    const result = getFibNumber(0)
    const expected = 0

    expect(result).toEqual(expected)
  })
  it('should return 3 when given 4', () =>{
    const result = getFibNumber(4)
    const expected = 3

    expect(result).toEqual(expected)
  })
  it('should work for larger numbers', () => {
    const result = getFibNumber(15)
    const expected = 610

    expect(result).toEqual(expected)
  })
})


// The Fibonacci sequence, named after mathematician Fibonacci, is a sequence of numbers that looks like this:

// `0, 1, 1, 2, 3, 5, 8, 11, 19`

// You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers.

// You should write the function `getFibNumber(steps)` that returns a number from the Fibonacci sequence, based on the parameter `steps`, which determines the position in Fibonacci number.

// - For example
//   - `0` should return `0`
//   - `4` should return `3`
//   - `15` should return `610`