// Write a function, persistence, that takes in a positive parameter 
// `num` and returns its multiplicative persistence, which is the 
// number of times you must multiply the digits in `num` until you 
// reach a single digit.

let counter = 0;

function persistence(num) {
  
  if (num.toString().length === 1) return counter;
  let res = num.toString().length;
  counter++;
  num = num.toString().split("").reduce((x, y) => x * y);
  return persistence(num, counter);
}

////////////////////////// tests //////////////////////////
counter = 0;
let result = persistence(39);
let expected = 3;

console.log("Testing peristence of 39");
console.log(`Test passed: ${expected === result}\n`);

counter = 0;
result = persistence(4);
expected = 0;

console.log("Testing peristence of 4");
console.log(`Test passed: ${expected === result}\n`);

counter = 0;
result = persistence(25);
expected = 2;

console.log("Testing peristence of 25");
console.log(`Test passed: ${expected === result}\n`);

counter = 0;
result = persistence(999);
expected = 4;

console.log("Testing peristence of 999");
console.log(`Test passed: ${expected === result}\n`);
