function persistence(num) {
  let times = 0
  
  //write a while loop that will run through
  //as many times as takes until the ouput is
  //1 character

  while (num.toString().length != 1){

    //put the number into an array containing each digit as a string
    var digits = (""+num).split("")

    // I couldn't figure out how to do it with just a for loop
    //so, knowing they were either 3 or 2 digit numbers, I made an if statment
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
