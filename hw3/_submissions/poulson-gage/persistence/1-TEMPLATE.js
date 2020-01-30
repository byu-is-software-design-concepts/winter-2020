function persistence(num) {
  let times = 0
  num = num.toString();
    while(num.length != 1)
    {
      results = 1;
      for(let i = 0; i < num.length; i++)
      {
        results = results * parseInt(num.charAt(i));
      }
      num = results;
      num = num.toString();
      times++;
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
