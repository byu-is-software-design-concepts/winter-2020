class StringCalculator {
    Add(nums) {
      // TODO

      if (nums != '') {
        let numsArray = nums.split(',')
        nums = numsArray.reduce((a,b) => parseInt(a) + parseInt(b), 0)
      }
      else {
        nums = 0
      }

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
  