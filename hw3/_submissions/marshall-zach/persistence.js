function persistence(num) {
  // TODO: Calculate "persistence"

  //Base case
  if(num < 10){
    return 0;
  }
  //if not a single digit
  //convert num into string to parse each digit from the string
  var strNum = num.toString();

  for(var i = 0; i < strNum.length; i++){
    if(i == 0){
      num = parseInt(strNum.charAt(i));
    }
    else{
      num = num * parseInt(strNum.charAt(i));
    }
  }
  //recursively call persistence until num is a single digit
  return 1 + persistence(num);
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

result = persistence(9999);
expected = 3;

console.log("Testing peristence of 9999");
console.log(`Test passed: ${expected === result}\n`);
