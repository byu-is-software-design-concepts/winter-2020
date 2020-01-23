// Here's my personal take on persistence. The rest are other examples I've seen.
function persistence(num) {
  let times = 0;
  while (num > 9) {
    num = [...String(num)].reduce((a, b) => a * b);
    times += 1;
  }
  return times;
}

// Probably the most vanilla solution on the page
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

// Recursive version
function persistence(num, counter = 0) {
  if (num.toString().length === 1) return counter;
  num = num
    .toString()
    .split("")
    .reduce((x, y) => x * y);
  counter++;
  return persistence(num, counter);
}

// Ternary + Recursion === You decide
const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

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
