function persistence(num) {
  const times = 0;
  // TODO: Calculate "persistence"
  for (var i = 0; num > 9; i++) { //9 is the last single digit number
    num = num
      .toString() //be able to break the number into digits
      .split("") //create an array of digits
      .reduce((a,b) => a*b); //researched the reduce method and saw how it handles items in an array
  }
  return i;
}
//I created another function at first to address persistence but got an error that I could not solve. From there, I researched the reduce method and
//discovered how I could use that to iterate through objects in the array. By splitting the string number, I could use reduce and return the i for how many times
//the loop executed to get persistence to a single digit

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
