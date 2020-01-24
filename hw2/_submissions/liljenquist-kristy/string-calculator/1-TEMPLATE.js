class StringCalculator {
  Add(nums) {
    // TODO
    var numsarray = nums.split(",").map(Number);
    if (nums != '') {
      nums = 0
      for ( let i = 0; i < numsarray.length; i++) {
        nums = nums + numsarray[i]
      }
      //nums = math.Add(intarray)
    } else {
      nums = 0
    }
    console.log(nums)
    return nums
  }
}

// - The method can take 0, 1 or 2 numbers in that string and will return their sum. An empty string returns 0.
// - For example:
//   - “” == 0 , “1” == 1 , “1,2” == 3

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
