class StringCalculator {
  Add(nums) {
    let parsed;
    let newNum;
    let total = 0;
    //Checks to see if blank
    if(nums == '') {
      return 0
    }
    else 
    //Splits the string up using commas
    parsed = nums.split(",")

    //Turns split strings into ints and adds them
    for(let i = 0; i < parsed.length; ++i){
    newNum = parseInt(parsed[i])
    total = total + newNum
    //console.log(newNum)
    //console.log(total)
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
