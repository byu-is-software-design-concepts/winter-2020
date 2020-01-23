  //Initial Goal -> Convert int to string to check length, store string in an array, and multiply digits and check length of result until length is 1

  function persistence(num) {
  let times = 0;
  l = num.toString().length
  if(l > 1) // check string length
  {
    while(num.toString().length > 1){ //Run until string length is 1
    holder = 1
    digits = Array.from(num.toString()) // convert number to string and store in array
    digits.forEach(digit => { holder = holder * digit; }) //iterate through array and store result of digits multiplication in holder
    times++; //increment times
    num = holder; //set num equal to holder value
    }
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
