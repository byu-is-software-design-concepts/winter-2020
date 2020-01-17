class StringCalculator {
  Add(nums) {
    let sum = 0
    let commaIndex = nums.indexOf(",");
    if (commaIndex > 0) {
      let num1 = parseInt(Number(nums.substring(0, commaIndex)));
      let num2 = parseInt(Number(nums.substring(commaIndex + 1)));
      sum = num1 + num2;
    } else {
      sum = parseInt(Number(nums));
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
