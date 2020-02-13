class StringCalculator {
  Add(nums) {
    nums_length  = nums.length
    if (nums_length > 3) {
      return 'Sorry that is too many numbers'
    }
    else if (nums_length == 3) {
      char1 = parseInt(nums.charAt(0))
      char2 = parseInt(nums.charAt(1))
      char3 = parseInt(nums.charAt(2))
	    valueR = char1 + char2 + char3
      return valueR
    }
    else if (nums_length == 2) {
      char1 = parseInt(nums.charAt(0))
      char2 = parseInt(nums.charAt(1))
      valueR = char1 + char2
      return valueR
    }
    else if (nums_length == 1) {
      return nums
    }
    else {
      return 'no';
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
