
/* 
  Well, I would need to create some sort of loop.
  Inside of the loop, I would need to convert 'num' to a string,
  split the digits apart, multiply them together and store the product
  as a new variable. Then I would need to check if this variable is 
  a single digit.The way I'd check would be to convert it to 
  a string, split the digits and check if the array 
  of digits is less than two. If so, then exit the loop. If not, I 
  would go through the loop again with the variable that I stored at 
  the end of the last iteration.

  Oh, and before I check to see if I should exit the loop, I need 
  to make sure that I have a counter variable that increments with 
  each iteration. Because that will end up being our final answer.

  Anyways, whenever I'm able to exit the loop (I would use a 'while' 
  loop) I would then end the function by returning my counter variable. 
*/

// I just realized that it would be smart to check at the start if 'num' > 9.
function persistence(num) {
  let times = 0;
  while (num > 9) {
    num = num.toString();
    num = num.split("");
    num = num.reduce((t, c) => t * c);
    times += 1;
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
