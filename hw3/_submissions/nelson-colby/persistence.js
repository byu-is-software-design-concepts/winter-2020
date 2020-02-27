function persistence(num) {
  let times = 0
  // Iteration 1: To start, I would take a test case like the examples given, and code to handle those instances.
  // As a brute force solution, I would take the input 'num', and first turn it into a string to be able to treat it as an array
  // num = String(num)

  // I would then enter a while loop checking if 'num' is a single digit
  // To simplify the solution, I would move the string cast into the actual
  while (String(num).charAt(0)!=num) {
    // Iteration 1/Brute Force: I would then create a variable to store the new multiplied value
    // let newVal = -1
    // I would then enter a for loop to multiply the digits of the number together and get the product
    // for (char of num) {
    //   newVal = (newVal === -1 ? char : newVal * char)
    // }

    // Iteration 2: To avoid creating the second variable and not have problems with the for loop, I would instead use the reduce function
    num = String(num)
          .split('')
          .reduce((t,c) => t * c )

    // I would then increment the times variable to track the persistence value
    times++
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
