

// It took me too long to figure out the for loop so I
//changed it to an if statment knowing the parameter
//passed in would be 2 or 3 digits
function persistence(num) {
  let times = 0;

  //while loop until num is one digit long
  while (num.toString().length !=1) {

    //create array of digits
    let digits = (""+num).split("");

    if (digits.length == 2){
      num = parseInt(digits[0]) * parseInt(digits[1])
      times++
    }
    else{
      num = parseInt(digits[0]) * parseInt(digits[1]) * parseInt(digits[2])
      times++
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
