// let hello = '1,2';
// var strArr = [];
// strArr = hello.split(",").map(Number);
// let sum = strArr[0] + strArr[1];
// console.log(sum);

class StringCalculator {
  Add(nums) {
    var numlength = nums.length;
    var output;
    var numsum;
    if (nums == ''){
      output = 0;
    } else if (numlength == '1') {
      output = parseInt(nums);
    } else {
      var strArr = [];
      strArr = nums.split(",").map(Number);
      output = strArr[0] + strArr[1];
    }
    return output;
  }
}

// ////////////////////////// tests //////////////////////////
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
