//initial thoughts
//if the num passed into the function has more than one digit than its persistence will be greater than 0. 
//Then we need to seperate each digit from num and multiply them to get the new num.
//If the new num still has more than one digit then we loop through the above process again.
//Else we return the number of times we were able to multiply the numbers digits together.

//create persistence function that receives a number
function persistence(num) {
  let times = 0;
  
  //while num has more than one digit
  while (num > 9) {
    //take each digit out of num and multiply each digit and increment times by 1 
    num = num.toString().split('').reduce((a,b) => a * b);
    times++;
  }
  
  //return the # of times
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
