export const getFibNumber = steps => {
  let fib_arr = [0, 1]// every fibonacci sequence will start with these numbers.
  for(let i = 2; i <= steps; i++){
    fib_arr.push((fib_arr[i-1] + fib_arr[i-2]))
  }
  return fib_arr[steps]
}


// The Fibonacci sequence, named after mathematician Fibonacci, is a sequence of numbers that looks like this:

// `0, 1, 1, 2, 3, 5, 8, 11, 19`

// You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers.