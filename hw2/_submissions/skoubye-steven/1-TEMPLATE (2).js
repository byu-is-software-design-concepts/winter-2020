class StringCalculator {
  Add(nums) {
      if (nums.length == 0) {
          return (0);
      }
      else if (nums.length == 1) {
          return (Number(nums));
      }
      else {
          return ((Number(nums.charAt(0))) + (Number(nums.charAt(nums.length - 1))))
      }
  }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1')
expected = 1

console.log('Testing adding 1 number')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1,2')
expected = 3

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')
