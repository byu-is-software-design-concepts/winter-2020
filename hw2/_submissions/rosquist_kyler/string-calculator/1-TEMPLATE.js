class StringCalculator {
  Add(nums) {
    let sum = 0;
    if (!nums.length) return sum;

    try {
      for (let num of nums.split(',')) {
        if (num == NaN) throw new Error(num + " cannot be parsed to type int");
        sum += parseInt(num);
      }
      return sum;
    } catch (err) {
      console.log(err);
      return 0;
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
