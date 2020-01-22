class StringCalculator {
    Add(nums) {
        var sum = 0;
        var list = nums.split(',');
    
        list.forEach(element => {
          if(element != '')
            sum = parseInt(sum) + parseInt(element);
        });
        return sum;
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