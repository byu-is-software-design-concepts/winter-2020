function persistence(num) {
  let times = 0
  // example: persistence(77) => 7*7=49, 4*9=36, 3*6=18, 1*8=8 and 8 has only one digit. Return 4
  // Stop iteration when num is lower than 10
  for (times = 0; num > 9; times++) {
    // Convert num to a string to split each number
    num = num // Assign num to the multiplied value to repeat until num has only one digit
      .toString()
      .split('')
      .reduce((a, b) => a * b) // Multiply the values contained in an array
  }
  return times
}

////////////////////////// tests //////////////////////////

let result = persistence(39)
let expected = 3

console.log('Testing peristence of 39')
console.log(`Test passed: ${expected === result}\n`)

result = persistence(4)
expected = 0

console.log('Testing peristence of 4')
console.log(`Test passed: ${expected === result}\n`)

result = persistence(25)
expected = 2

console.log('Testing peristence of 25')
console.log(`Test passed: ${expected === result}\n`)

result = persistence(999)
expected = 4

console.log('Testing peristence of 999')
console.log(`Test passed: ${expected === result}\n`)
