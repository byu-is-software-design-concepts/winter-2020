class StringCalculator {
  Add(nums) {
    // TODO
    if (nums == '') { 
          // if value contains no elements 0
          nums = 0
      }
      else if (nums.charAt(1) === ',') {
          // if string contains mulitple elements, convert first one to an integer
          let firstNum = nums.charAt(0)
          firstNum = parseInt(firstNum)
          // if string contains mulitple elements, convert second one to an integer
          let secondNum = nums.charAt(2)
          secondNum = parseInt(secondNum)
          // add the two integers together
          nums = firstNum + secondNum
      }
      else {
      	// if only one integer exists, convert that into an int and assign
          nums = parseInt(nums)
      }
      // return value of integer
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
