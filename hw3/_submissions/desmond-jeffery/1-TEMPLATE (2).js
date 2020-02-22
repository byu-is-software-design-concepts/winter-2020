function persistence(num) {
  let times = 0
  // Since we are looking for a single digit number, we'll do a while loop until our number is lower than 10. 
    //We have to split the number and then mulply each piece of the array using a reduce function.
    //We'll count the number of times we do this with a variable and then return the variable as our result.

    while ( num > 9) {
        num = num.toString()
        num = num.split("")
        num = num.reduce(function (product, value) { return product * value; })
        times += 1
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
