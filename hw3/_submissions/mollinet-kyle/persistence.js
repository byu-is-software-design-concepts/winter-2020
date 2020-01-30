// First things first, I have a few questions about the problem. 
// Can the input be negative? What about zero?
// Is the number an integer? 
// What is the maximum number?
// *** Listen here ***

// *** draw an example ***
// So one example would be something simple like if we submitted the number 88. 
// 8*8 = 64. 6*4 = 24. 2*4 = 8. The answer is 3.  

//  *** state brute force ***
// Brute force would be putting a for loop in a while loop. The while loop would be checking
// the resulting number of digits (result.length in js) and the for loop would split the number open, parse the digits to integers
// and multiply them together. This is pretty slow because we have nested loops, but it would work.
// this would be a big o notation of O(n^2)

// *** optimize ***
// I think it may be faster to use recursion. We could have a loop that is in a function. 
// the function would conditionally call itself again if the digits are too many. Now we only have one loop
// but we have recursion. Not sure what's faster, and it actually might make it bit O notation of O(2^n). It would probably
// save us some memory though because we'd store less variables.

// *** walk through ***
// So it would look something like this: (I'm up at a white board or in a shared editor now. I'd probably just comment my code real good instead
// of going too crazy here.)

function persistence(num) {
    if(num.toString().length==1)
        return 0
    var times = 1;
    recurse(num)
    function recurse(num){
      numSplit = num.toString().split('').map(Number);
      var result = numSplit[0]
      for(var i = 1; i < numSplit.length; i++)
          result *= numSplit[i];
      if(result.toString().length > 1){
          times++;
          recurse(result)
      }
      else
          return times
    }
    return times;
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
  