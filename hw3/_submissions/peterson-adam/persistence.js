function persistence(num) {
  // Declare variables, changed times from const to let to allow for writing to let variables
  let times = 0
  // make the number a string
  let y = num.toString();
  // split string to get array with each numerical digit being an array element
  let z = y.split("");
  // holder variable 
  let arrLength = z.length;

  // Check if the variable is already a single digit
  // This could probably be solved more elegantly, but this works
  if((z.length === 1))
  {
    times = 0;
  }
  else
  {
    // loop while the length of the number is not 0
    // This could also be > 1
    while(z.length !== 1)
    {
      // holder variable that resets after each for loop
      // equal to 1 so that the first multiplication equals the first array element
        let holder = 1;
        // Loop for length of number
        for(i = 0; i < z.length; i++)
        {
          // Multiply current array value by holder variable
            holder = holder * z[i]
        }
        // Similar to above
        y = holder.toString()
        z = y.split("");
        // increment times which counts number of loops
        times++;
        // decrement to exit loops once the arrayLength equals 0
        arrLength --;
    }
  }

  // return counter variable
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
