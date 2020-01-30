class StringCalculator {
  Add(nums) {
    let result = 0;
    const allNums = ['1','2','3','4','5','6','7','8','9','0']
    for (let i = 0; i < nums.length; i++)
    {
      if(allNums.includes(nums.charAt(i)))
      {
        result += parseInt(nums.charAt(i))
      }
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
