function persistence(num) {
  var times = 0
  // TODO: Calculate "persistence"
  if(num < 10) {
    return times;
  }
  else {
    var temp = num.toString();
    new_num = 999;
    while(new_num >= 10){
      new_num = parseInt(temp.charAt(0));
      for (var i = 1; i < temp.length; i++) {
        new_num *= parseInt(temp.charAt(i));
      }
      times++;
      temp = new_num.toString();
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
