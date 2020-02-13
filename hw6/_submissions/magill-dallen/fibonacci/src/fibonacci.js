export const getFibNumber = steps => {
  let num1 = 0
  let num2 = 1
  let num3
  let output = 0

  for(let i = 2; i <= steps; i++){
    num3 = num1 + num2
    if(i == (steps)){
      output = num3
    }
    num1 = num2
    num2 = num3
  }
  return output
} 

// The Fibonacci sequence, named after mathematician Fibonacci, is a sequence of 
//numbers that looks like this:

// `0, 1, 1, 2, 3, 5, 8, 11, 19`

// You get first two starting numbers, 0 and 1, and the 
//next number in the sequence is always the sum of the previous two numbers.

// You should write the function `getFibNumber(steps)` that returns a number 
//from the Fibonacci sequence, based on the parameter `steps`, which determines
//the position in Fibonacci number.

// - For example
//   - `0` should return `0`
//   - `4` should return `3`
//   - `15` should return `610`