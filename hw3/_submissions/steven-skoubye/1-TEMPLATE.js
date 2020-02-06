//My initial thought is that I'll need a while loop

//I'll need to parse the number so that I can mulitpy each digit by the other digits in the number.

//So I'll need to cast the number as a string, then create an array out of the string, and then perform the multiplication

//While the number has multiple digits, perform the opperation and set num to the new num.
function persistence(num) {
    var times = 0
    while (num > 9) {        
        num = num.toString().split("").reduce((a, b) => a * b)
        times = times + 1
    }
  // TODO: Calculate "persistence"
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
