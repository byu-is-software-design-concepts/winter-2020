class StringCalculator {
  Add(nums) {

    if (nums == '')
    {
      return 0
    }
    else
    {
      let toAdd = []
      toAdd = nums.split(',')

      console.log(toAdd)
      nums = 0
      let iCount = 0
      for (iCount = 0; iCount < toAdd.length; iCount++)
      {
        nums += parseInt(toAdd[iCount])
      }
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
