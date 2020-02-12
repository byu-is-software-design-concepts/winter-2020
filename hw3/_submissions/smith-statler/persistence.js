function persistence(num) {
    let times = 0
    
    // I need to break up any input by digit.
    /* 
     persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                           // and 4 has only one digit
    */
    // Divide by 10 until num/10^x === 0. Use that many places.
    // Keep doing that until num/10 === 0. Then there's only one digit. Keep track of the iterations using the times variable.

    // Brute Force -- see commented lines after return.


    //Begin the loop here to go through the digits of the number until the number has only one digit.
    let newNum = 10
    let factor = 0; // To record the factor of tens we are dividing by (10, 100, 1000, etc.)
    let divideNum = num;
    while(divideNum /10 >= 1){
        factor = 0;
        
        // divide num by factors of 10 until one of those results is 0.
        while (num/(Math.pow(10, factor)) >= 1)
        {
            factor += 1;
        }

        // factor now equals the number of digits in the entered number. 
                
        newNum = 1;
        for(factor; factor > 0; factor--){// Isolate out the digits and multiply them
            newNum = newNum * (Math.floor(divideNum/(Math.pow(10, (factor-1)))));//Isolate one digit, multiply it by the last digit.
            divideNum = divideNum - (Math.pow(10, factor - 1) *(Math.floor(divideNum/(Math.pow(10, (factor-1))))));//Get rid of the digit just multiplied.
        } 
        //newNum now has the digits multiplied together. We need to go through this whole process again until newNum has one digit.  
        divideNum = newNum;
        times += 1 //Add and keep track of the times you loop through.
    }


    return times;

    //Brute force example lines.
    // Now we can divide the number by factors of ten up to factor to separate out the digits.
    //digit1 = num /(10^factor); I used these lines doing a brute force example.
    //digit2 = num - (digit1*10)
    //For the first example, we now have the three and the nine. digit1 = 3, digit2 = 9.
    //multiply these together to get the new number.
    //newNum = digit1 * digit2
    //Keep doing this until newNum/10 = 0
  }
  
  ////////////////////////// tests //////////////////////////
  
  let result = persistence(39);
  let expected = 3;
  
  console.log("Testing peristence of 39");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(4);
  expected = 0;
  
  console.log("Testing peristence of 4");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(25);
  expected = 2;
  
  console.log("Testing peristence of 25");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(999);
  expected = 4;
  
  console.log("Testing peristence of 999");
  console.log(`Test passed: ${expected === result}\n`);
  