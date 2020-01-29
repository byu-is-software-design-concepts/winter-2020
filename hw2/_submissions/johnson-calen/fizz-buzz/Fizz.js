let getFizzBuzz = num => {
  const forThree ="Fizz"
  const forFive = "Buzz"
  const forBoth = "FizzBuzz"
  //console.log(num % 3)

  //Checks to see if it can be divided by 3 or by 5
  if((num % 3 == 0 ) && (num % 5 == 0) ){
    return forBoth
  }
  //Checks to see if it can be divided by 3
  else if(num % 3 == 0) {
    return forThree
  }
  //Checks to see if it cna be divided by 5 
  else if (num % 5 == 0) {
    return forFive
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
