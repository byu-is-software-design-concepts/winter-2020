// initial thoughts:
//    some sort of loop that counts the number of digits each time would be necessary
//    probably a while loop because you just check that condition every time
//    So lets try and write some code now

function persistence(num) {
  let times = 0
  // if num >= 10, then it is not one digit, so it needs to be multiplied
  while (num >= 10) {
    let str_num = num.toString();
    let result = 1;
    for (let i = 0; i < str_num.length; i++) { // multiply each digit together
      result *= str_num[i];
    }
    num = result; // set num equal to the new result so that the loop can recheck the condition
    times++; // increment counter
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

// All tests successful!