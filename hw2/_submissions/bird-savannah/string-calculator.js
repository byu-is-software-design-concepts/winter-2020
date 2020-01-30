  
class StringCalculator {
    Add(nums) {
      if (nums == '') { 
          nums = 0
      }
      else if (nums.charAt(1) === ',') {
          let firstnum = nums.charAt(0)
          firstnum = parseInt(firstnum)
          let secondnum = nums.charAt(2)
          secondnum = parseInt(secondnum)
          nums = firstnum + secondnum
      }
      else {
          nums = parseInt(nums)
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