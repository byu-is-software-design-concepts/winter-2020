function persistence(num) {
  let times = 0
  /********** MY NAIVE SOLUTION **********/
  // First, split digits of the integer into a character array or string.
  let numString = num.toString();
  // Measure length of string in while loop.
  while(numString.length > 1){
    // Loop over string, convert each character back to int, and multiply. 
    let product = 1;
    for(let digit of numString) {
      product *= parseInt(digit);
    }
    // Convert the product back to string so that the while loop can accurately check the new num's length.
    numString = product.toString();
    // Increment tracking variable.
    times++;
  }
  // After completing this problem, I reviewed Branden's solutions. I believe this is pretty close to what he did but I think my function might have greater time complexity.
  // If doing this again, I would make my while loop condition if num is greater than 9 rather than the number of digits.
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
