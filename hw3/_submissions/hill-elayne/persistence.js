function persistence(num) {
    let times = 0 //this was originally const but I changed it to let so that we could actually change it
    
    //so we need to keep splitting the number and multiplying the pieces until the product is a single digit
    //while counting the number of times we have split and multiplied
    //this can be accomplished in a loop

    //first make sure the number is already more than one digit--if not then terminate and return 0
    while (num > 9) { 
        num = num
            .toString() //convert to a string so that we can use the split function on it
            .split("") //split num into single digits in an array
            .reduce((a, b) => a * b); //multiply each element of the array
        times += 1 //increment the number of times we/ve had to split and multiply until our num is a single digit (checked in while condition)
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
  