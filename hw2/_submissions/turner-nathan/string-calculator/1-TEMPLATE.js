class StringCalculator {
  Add(nums) {
    // TODO
    let sum = 0;
    nums = nums.split(",")
    console.log(nums)
    if (nums.length === 1 && nums[0] === '') {
      return 0
    }
    for(let num of nums) {
      num = parseInt(num)
      sum += num
    }
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
