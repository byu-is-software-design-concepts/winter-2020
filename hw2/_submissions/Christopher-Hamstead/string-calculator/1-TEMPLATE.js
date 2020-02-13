// Create a simple class `StringCalculator` with a method `Add` that takes in one parameter of type string called `nums`.

// - The method can take 0, 1 or 2 numbers in that string and will return their sum. An empty string returns 0.
// - For example:
//   - “” == 0 , “1” == 1 , “1,2” == 3

class StringCalculator {
  Add(nums) {
    let sum = 0
    let numLst = nums.split(',').map(Number);

    numLst.forEach(item => sum += item);
    
    return sum
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
