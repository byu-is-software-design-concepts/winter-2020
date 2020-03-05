function persistence(num) {
  function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
  const times = 0
  var count = 0
  // TODO: Calculate "persistence"
  var n = num.toString();
  while (n.length > 1){
    count +=1;
    var matches = n.match(/(\d)/g);
    console.log(matches)
    num = multiply(matches);
    n = num.toString();
    console.log(n)
  }
  
  return count;
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
