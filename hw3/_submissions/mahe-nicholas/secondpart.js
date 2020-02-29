function persistence(num, counter = 0) {
    // TODO: Calculate "persistence"
    
    //I should have looked at the test cases first because I realized it was testing the counter.
    //But essentially, I wrote mine out very similar to this. 
    //I converted the number to an array of chars and then needed to keep a running total so the reduce method
    //was perfect for that so it would keep the total while traversing the array
    //The only part left was to increment the counter and then provide a base case when the number was a single digit
    //if not, recurse the function
    if (num.toString().length === 1) return counter;
    num = num
    .toString()
    .split("")
    .reduce((x, y) => x * y);
    counter++;
    return persistence(num, counter);
    
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
  