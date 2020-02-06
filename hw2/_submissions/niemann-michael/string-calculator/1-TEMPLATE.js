class StringCalculator {
  Add(nums) {
    let sum = 0;
    console.log("nums: " + nums)
    for (var i = 0; i < nums.length; i++){
      if (!isNaN(parseInt(nums.charAt(i)))) {
        sum = sum + parseInt(nums.charAt(i));
      }
    }
    return sum;
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
