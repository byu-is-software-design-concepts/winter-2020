function persistence(num) {
  /***** 1. LISTEN *****/
  // My first thought would be to "listen" and make sure I understand and know the keywords for 
  // the right inputs and outputs of the problem.
  // Inputs: positive parameter 'num'
  // Output: multiplicative persistence of that 'num'
  // I would then double-check with the interviewer that I understand the requirements correctly before even beginning.

  /***** 2. DRAW AN EXAMPLE *****/
  // An example would be  persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
  // and 4 has only one digit. I might also include some other test cases like strings or really large positive numbers
  // to ensure my code accounts for incorrect and/or extreme inputs.

  /***** 3. STATE A BRUTE FORCE *****/
  // Before brute forcing this, I would notice that I've been given a variable 'times' that I assume I will need to use
  // to track how many times it takes to return a single digit. Since I am incrementing (and therefore changing) this value,
  // is cannot be const.
  let times = 0

  // It is important to recognize that 'num' is a digit, but needs to be transformed into a string
  // in order to be separated into its separate digits that will be multipled together each time in the multiplicative
  // persistence process. The function I write will need to change 'num' from a digit to a string and then back to a digit.
  let numString = num.toString();

  // Next, my initial thoughts are that I will have to create a loop of some sort to loop through each multiplicative persistence
  // while tracking how many times I iterate through this loop
  while(numString.length > 1) { // I want to do a while loop because I want it to keep iterating until the function returns a one-digit number
    let productOfNums = 1; // I need to keep a running total of the product of the numbers in numString
    
    for(let digit of numString) { // This will loop through each digit in num
      // I need to keep a running total of all the numbers I've multipled together
      productOfNums = productOfNums * parseInt(digit); // Digit is a string that needs to be converted to an int in order to be multiplied
    }

    // At this point in the function, productOfNums is of type int and needs to be converted to a string like numString
    // to be accurately checked before continuing in the loop
    numString = productOfNums.toString();

    // Each time I go through this will loop, I need to increment the 'times' variable
    times++;
  }

  /***** 4. OPTIMIZE *****/
  // Since there's only two main components of this function 1) converting string -> int -> string and 2) looping through the
  // string, there's definitely ways to optimize one or both of these parts. Simplifying these might also help the Big O ascept
  // of things too.

  /***** 5. WALK THROUGH *****/

  /***** 6. IMPLEMENT *****/
  // Ran the code, seemed to work as designed

  /***** 7. TEST *****/
  // Ran the code, all the the test came back with 'Test passed: true'
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