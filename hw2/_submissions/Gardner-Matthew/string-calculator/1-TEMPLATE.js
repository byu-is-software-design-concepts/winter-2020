class StringCalculator {
  Add(nums) {
    // TODO
    var iCount;
    var result;
    var aNums = nums.split("");
    if (aNums.length > 1) {
      aNums = nums.split(",")
    }
    
    if (aNums.length == 2) {
      result = parseInt(aNums[0]) + parseInt(aNums[1]);
      return result;
    }
    else if (aNums.length == 1) {
      result = parseInt(aNums[0]);
      return result;
    }
    else {
      return 0
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
