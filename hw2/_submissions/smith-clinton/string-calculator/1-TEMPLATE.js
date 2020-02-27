class StringCalculator {
  Add(nums) {
    // TODO
    var total = 0
    var matches = nums.match(/(\d)/g)
    
    if (matches != null)
    {
      for (var i = 0; i < matches.length; i++) {
        total = parseInt(matches[i]) + total;
      }
    }
    return total
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
