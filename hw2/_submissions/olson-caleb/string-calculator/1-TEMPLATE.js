class StringCalculator {
  Add(nums) {
    const numArr = nums.split(",")
    if (numArr[0] == '') {
      return 0
    }
    else if (numArr.length == 1) {
      return parseInt(nums)
    }
    else {
      const sum = (parseInt(numArr[0]) + parseInt(numArr[1]))
      return sum
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
