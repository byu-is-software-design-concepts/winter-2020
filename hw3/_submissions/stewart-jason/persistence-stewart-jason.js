//So thoughts in going through this is first cast the num as a string to then use the .split method to get each individual number
//Then I needed to go through each number and multiply them by each other, after some googling and looking around I found the .reduce method
//which allowed me to go through each number and have a function with it that would multiply the numbers in an array. The .reduce was a little
//tricky and i wouldnt have known what to do in an interview

function persistence(num) {
  let times = 0;
  for (var index = 0; num > 9; index++) {
    num=num.toString().split("").reduce((a,b) => a*b)
    times+=1
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