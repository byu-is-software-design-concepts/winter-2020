function persistence(num) {
  let times = 0
  // TODO: Calculate "persistence"

  //I listened to your cool story bro

  //draw an example of how this is like cracking an egg and splitting the yoke and the white to make fluffy pancakes
  var stringify = num.toString(10)
  //brute force. bring in the if statements!
  //first check if the orginal number is a single digit
  if (stringify.length === 1) {
    return times;
  }

  //else we need to do some splitting
//  else {
//    var numArray = []
//    for (let i = 0; i < stringify.length; i++){
//      numArray.push(stringify.charAt(i))
//      console.log(numArray)
//    }
//    for (let j = 0; j < numArray.length; j++){
//
//      times += 1
//    }

//    return times;
//  }

//give up and copy code from Branden. What the heck does reduce do!?!?
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
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
