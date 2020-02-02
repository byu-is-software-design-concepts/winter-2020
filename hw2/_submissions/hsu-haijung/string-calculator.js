class StringCalculator {
  Add(nums) {
    // TODO
    var result = 0;
    var lst = nums.split(',');

    lst.forEach(element => {
      if(element != '')
        result = parseInt(result) + parseInt(element);
    });
    return result;
  }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')

result = stringCalc.Add('1')
expected = 1

console.log('Testing adding 1 number')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')

result = stringCalc.Add('1,2')
expected = 3

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log(result)
console.log('')
