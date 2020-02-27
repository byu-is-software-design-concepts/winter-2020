function persistence(num) {
  let times = 0

  // TODO: Calculate "persistence"
  //split num to multiply each digit individually
  //if that digit is > 9, then split the number again and increment times

  //while num is greater than 9, aka has two digits
  while (num > 9) {
    //split num into individual digits and multiply its products
    num = num.toString().split('').reduce((a,b) => a * b);
    times = times + 1;
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
