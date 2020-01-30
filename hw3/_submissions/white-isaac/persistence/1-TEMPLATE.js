function persistence(num) {
  //Changed this to let instead of const so it can be assigned to
  let times = 0
  // TODO: Calculate "persistence"
  //Brute force -  While the number is greater than 9, the digets need multiplied together
  while (num > 9) {
    //Convert num to string
    let string_num = num.toString();
    //Reset num
    num = 1
    //Multiply all the digets together
    for (let i = 0; i < string_num.length; i +=1) {
      num *= string_num[i];
    }
    //Each time the digets are multiplied, the times counter should be 
    //incremented by one
    times += 1;
  }

  return times;
}

//Take two
function persistence(num) {
  let times = 0;
  while (number > 9) {
    num = num.toString().splice("").reduce((p, c) => p * c);
    times += 1;
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
