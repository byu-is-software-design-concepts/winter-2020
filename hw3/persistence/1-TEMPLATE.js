function persistence(num) {
  
  // If the input 'num' is negative or not a number, 
  // throw an error 
  if (num < 0 || !Number.isInteger(num)) throw new Error("You must enter a postive integer to call function 'persistence()'.");
  
  // return when the input 'num' is a single digit
  if (num <= 9) return 0;

  let numsArray = num.toString().split("");
  
  return 1 + persistence(multiplyMultiplicatives(numsArray));
}

// finds the product of an array of numbers (in string form)
// ex: [3,9] returns 27, [2,7] returns 14, and [1,4] returns 4
const multiplyMultiplicatives = (numsArray) => {
  let returnValue = 1;
  numsArray.forEach(element => { returnValue *= parseInt(element); });
  return returnValue;
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

// *** Error Testing ***

// result = persistence('e');
// console.log("myresult1: ", result)

// result = persistence(-1);
// console.log("myresult2: ", result)