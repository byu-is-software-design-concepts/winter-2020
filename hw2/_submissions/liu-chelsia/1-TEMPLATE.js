// Write a function that returns a number, "Fizz", "Buzz", or "FizzBuzz".
// For each multiple of 3, return "Fizz" instead of the number.
// For each multiple of 5, return "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, return "FizzBuzz" instead of the number.
// For all other cases, return the number.

let getFizzBuzz = num => {
  // TODO
  // console.log('This is num: ' + num);
  let remainder = 0;
  if((num % 5 === remainder) && (num % 3 === remainder)) {
    num = 'FizzBuzz';
  }
  else if(num % 5 === remainder) {
    num = 'Buzz';
  }
  else if(num % 3 === remainder) {
    num = 'Fizz';
  }
  return num
}

////////////////////////// tests //////////////////////////

let result = getFizzBuzz(1)
let expected = 1

console.log('Testing normal number')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = getFizzBuzz(3)
expected = 'Fizz'

console.log('Testing multiple of 3')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = getFizzBuzz(5)
expected = 'Buzz'

console.log('Testing multiple of 5')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = getFizzBuzz(30)
expected = 'FizzBuzz'

console.log('Testing multiple of 3 and 5')
console.log(`Test passed: ${expected === result}`)
console.log('')
