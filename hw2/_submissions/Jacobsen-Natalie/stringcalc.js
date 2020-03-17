class StringCalculator {
  Add(nums) {
    if (nums.length == 0)
    {
      nums = 0;
    }
    else if (nums.length == 1)
    {
      nums = parseInt(nums);
    }
    else if (nums.length == 3)
    {
      nums = parseInt(nums[0]) + parseInt(nums[2]);
    }
    return nums
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
