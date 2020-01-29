class StringCalculator {
  Add(nums) {
    let total = 0
    let aStrNum = []
    let aIntNum = []
    if(nums === "")
    {
      return total
    }
    else
    {
      aStrNum = nums.split(",")
      aIntNum = aStrNum.map(val => parseInt(val))
      for (let i = 0; i < aIntNum.length; i++)
      {
        total += aIntNum[i]
      }
      return total
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
