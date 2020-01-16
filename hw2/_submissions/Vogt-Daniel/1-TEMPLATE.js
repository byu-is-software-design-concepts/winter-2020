class StringCalculator {
  Add(nums) {

    if (nums != ""){
      nums = nums.split(',').map(function(item) {
        return parseInt(item, 10);
      });
    }else{
      nums = 0
    }    

    let added = 0

    if (nums != 0){
      for (let i = 0; i < nums.length; i++){
        added = added + nums[i]
      }
    }
    
    nums = added   

    return nums
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
