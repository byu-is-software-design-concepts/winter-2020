class StringCalculator {
  Add(nums) {
    if (nums == ''){
      return 0
    }
    var numsArray = nums.split(',')
    var result = 0
    for(var i=0; i < numsArray.length; i++){
      result += parseInt(numsArray[i])
    }
    return result
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
