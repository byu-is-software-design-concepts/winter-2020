function persistence(num) {
  var i = 0 //create output variable 
  for (i = 0; num > 9; i++) { //loop under single digit
    num = num //split the numbers so that they can be multiplied
      .toString()
      .split("")
      .reduce((num1, num2) => num1 * num2);
  }
  return i;
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
