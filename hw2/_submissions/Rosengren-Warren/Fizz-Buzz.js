let getFizzBuzz = num => {
let mod = num %3 
console.log(mod)
let mod2 = num %5
console.log(mod2)
if (mod==0){
  num= "Fizz"
}
else if (mod2==0) {
  num="Buzz"
}
else if (mod2==0 & mod==0){
  num="FizzBuzz"
}
else
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
