// create a simple class StringCalculator
// with a method Add that takes in one parameter of a string
// The method can take 0, 1 or 2 numbers in that string, and will return their sum
// (for an empty string it will return 0)
// for example
// “” == 0 , “1” == 1 , “1,2” == 3

class StringCalculator {
  Add(nums) {
    // TODO
    return nums
  }
}

////////////////////////// test //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('1,2')
let expected = 3

console.log(`Test passed: ${expected === result}`)
