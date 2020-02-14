// Write a function, persistence, that takes in a positive parameter `num` 
// and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in `num` 
// until you reach a single digit.


function persistence(num) {
  let times = 0
  newNum = num
  while (newNum > 9) {
    let digits = (""+newNum).split("");
    let realDigits = digits.map(Number)
    tempNum = 1
    realDigits.forEach(value => {
      tempNum *= value
    })
    times++;
    newNum = tempNum
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
