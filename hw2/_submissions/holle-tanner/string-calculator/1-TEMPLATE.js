class StringCalculator {
  Add(nums) {
    var sum = 0
    
    var array = nums.split(',')
    for (var i = 0; i < array.length; i++) {
      sum += +array[i]
    }
    return sum
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
<<<<<<< HEAD:hw2/_submissions/holle-tanner/string-calculator/1-TEMPLATE.js
console.log('')

result = stringCalc.Add('1,2,4,5,6,7,')
expected = 25

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')
=======
console.log('')
>>>>>>> 703ddd7bed3474ffde0f5c75344f7ed53f68cb99:hw2/string-calculator/1-TEMPLATE.js
