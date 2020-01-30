class StringCalculator {
  Add(nums) {
    // TODO
    if (nums == '')
    {
      return 0
    }
    else if (nums.search(',') == -1)
    {
      nums = Number(nums)
      return nums
    }
    else{
      let location = nums.search(',')
      let num1 = Number(nums.substring(0, location))
      let num2 = Number(nums.substring(location + 1, nums.length))

      return num1 + num2
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
