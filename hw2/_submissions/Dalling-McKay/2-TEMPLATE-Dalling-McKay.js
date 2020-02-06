class StringCalculator {
  Add(nums) {  

    nums = nums.split(",").map(Number)
    console.log(nums)

    let totalSum = 0
    for (let i = 0; i < nums.length; i++) {
      totalSum += nums[i] 
    }
    console.log("TOTAL SUM " + totalSum)
    return totalSum
  }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')

result = stringCalc.Add('1')
expected = 1

console.log('Testing adding 1 number')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')

result = stringCalc.Add('1,2')
expected = 3

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')
