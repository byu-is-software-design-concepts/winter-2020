class StringCalculator {
  Add(nums) {
    let temp = nums.split(',')

    let total = 0
    for (let iCount = 0; iCount < temp.length; iCount++) {
      if (isNaN(temp[iCount])) {
        continue
      }
      total += Number(temp[iCount])
    }
    nums = total
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
