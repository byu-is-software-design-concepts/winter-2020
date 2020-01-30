function persistence(num) {
  
  let times = 0

  //While loop that determines whether the number is a single digit number or not
  while(num > 9) {
    //Convert num to string and split it to an array. Call the reduce function that runs an anonymous function that takes each value and multiplies them together
    num = num.toString().split("").reduce((x, y) => {return x * y})
    //Iterate the amount of times the while loop ran
    times = times + 1
}
  return times
}

//////////////////////// tests //////////////////////////

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
