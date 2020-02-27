function persistence(num) {
    let counter = 0

    let numberString = num.toString();

    while(numberString.length > 1){
        let multiplier = 1 //Keep track of the product of the multiplication

        for(let number of numberString){ //breaking down the numbers and multiplying them by themselves
            multiplier *= parseInt(number)
        }

        numberString = multiplier.toString(); //Data type must be converted back into string for .length while loop to continue

        counter++ //add to the counter
    }

    return counter
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

