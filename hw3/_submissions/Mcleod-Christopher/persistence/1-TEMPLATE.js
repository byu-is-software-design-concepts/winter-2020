// First try I just went through it trying everything that I could but I just could nto figure it out intially so I just copied the cod
/*
function persistence(num) {
  let times = 0
  // TODO: Calculate "persistence"
  
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
  }
  
  times = i

  return times;
}
*/

// I had to ask some questions in order to continue to move forward
// This is what I was trying to do the first time but I just couldnt get the sytax right
function persistence(num) {
  let times = 0
  // TODO: Calculate "persistence"
  /*
  while (num > 9) {
    num = num.toString();
    num = num.split("")
    num = num.reduce((a, b) => a * b)
    times++
  }
  */
  
  // Attempted to optimize to this
  /*
  while (num > 9) {
    times++
    num = num 
      .toString()
      .split("")
      .reduce((a, b) => a * b)    
  }
  */

  // finally simplifies to this
  while (num > 9) {
    num = num.toString().split("").reduce((a, b) => a * b)
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
