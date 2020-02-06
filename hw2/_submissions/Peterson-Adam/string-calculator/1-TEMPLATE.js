class StringCalculator {
  Add(nums) {
    let numArray = nums.split(",")
    let sumArray = 0;
    let i = 0;
    if(!(numArray[0] === ""))
    {
      while(i<numArray.length)
      {
        let holdInt = parseInt(numArray[i]);
        sumArray += holdInt;
        i++;
      }
      return sumArray
    }
    else
    {
      sumArray = 0;
      return sumArray
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
