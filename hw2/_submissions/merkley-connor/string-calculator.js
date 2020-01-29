class StringCalculator {
    Add(nums){
      // TODO
      const array = nums.split(',').map(Number);
      let sum = 0
      if (nums == ''){
          return sum
        } else {
            for(let i = 0; i < array.length; i++){
                sum = sum + array[i]
            }
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
  console.log('')