function persistence(num) {
  //this was const in the template, but I changed it to let so I could increment it  
  let times = 0
    //convert num to string to get each digit
    num = num.toString()

    //I went back and added the while loop after doing the logic inside
    //the while loop is needed to keep multiplying if the number/product isn't a single digit
    while (num.toString().length > 1) {
      //we need a way to keep track of the product, so we'll initialize it here
      let product = 1
  
      //loop through each character (digit) to multiply it
      for(let digit of num) {
        //change the digit back into an int to multiply it
        product *= parseInt(digit)
      }

      //increment the counter for the amount of times of multiplying
      times++

      //reassign product to num as string 
      num = product.toString()
    }

    return times;
  }
  //This solution may not be the most efficient, but it's the way that made sense
  //I thought about using the .reduce() function and saw that Branden did it that way, so that might be more efficient

  
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
  