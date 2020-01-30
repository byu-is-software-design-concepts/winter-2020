function persistence(num) {
  let times = 0;
  // TODO: Calculate "persistence"

  //First I will make a for loop with times = to 0 where num > 9
  //If the num passed in is not greater than 9 the function will return the persistance of 1 because its a single digit already
  for (times = 0; num > 9; times++) {
    //Once in the for loop I will convert the num parameter into a string allowing me to split it, creating an array of digit
    //Used the reduce method to bring it down to a single digit
    num = num
      .toString()
      .split("")
      .reduce((x, y) => x * y);
  }

  console.log(times);
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
