function persistence(num) {
  let times = 0;
  // first method i can think of to do it would be...
  // convert num to string,
  // split into array,
  // convert string numbers back to number by mapping through array
  // reduce the array to get its sumproduct
  // start a while loop that runs until the reduced num is less than 10 (ie a single digit)
  // increment the times variable
  // reduce again

  // after thinking through all of it and then trying it out i came up with this:

  // while (num > 9) {
  //   num = num
  //     .toString()
  //     .split("")
  //     .map(x => Number(x))
  //     .reduce((a, b) => a * b);
  //   times++;
  // }

  // which after figuring out i boiled down to this which i just find a little more readable
  // and stuff like spread syntax is just fun
  while (num > 9) {
    num = [...String(num)].reduce((a, b) => a * b);
    times++;
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
