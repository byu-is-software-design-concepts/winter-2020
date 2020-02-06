//fizz buzz
let getFizzBuzz = num => {
    // TODO
    for (var i=1; i < 101; i++){
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
    return num
  }
  
  ////////////////////////// tests //////////////////////////
  
  let result = getFizzBuzz(1)
  let expected = 1
  
  console.log('Testing normal number')
  console.log(`Test passed: ${expected === result}`)
  console.log('')
  
  result = getFizzBuzz(3)
  expected = 'Fizz'
  
  console.log('Testing multiple of 3')
  console.log(`Test passed: ${expected === result}`)
  console.log('')
  
  result = getFizzBuzz(5)
  expected = 'Buzz'
  
  console.log('Testing multiple of 5')
  console.log(`Test passed: ${expected === result}`)
  console.log('')
  
  result = getFizzBuzz(30)
  expected = 'FizzBuzz'
  
  console.log('Testing multiple of 3 and 5')
  console.log(`Test passed: ${expected === result}`)
  console.log('')

  //string calculator

  class StringCalculator {
    Add(nums) {
      // TODO
      for (var i = 0; i < nums.length; i++) {
        sumOfNums += parseInt(nums[i]);
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
  