class StringCalculator {
  Add(nums) {
    let numbers = nums.split(",");
    let output = 0;
    if (numbers.length == 0) {
      return output;
    } else {
      // Convert to numbers
      numbers.forEach(n => {
        output = output + Number(n);
      });
      return output;
    }
  }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator();

let result = stringCalc.Add("");
let expected = 0;

console.log("Testing adding no numbers");
console.log(`Test passed: ${expected === result}`);
console.log("");

result = stringCalc.Add("1");
expected = 1;

console.log("Testing adding 1 number");
console.log(`Test passed: ${expected === result}`);
console.log("");

result = stringCalc.Add("1,2");
expected = 3;

console.log("Testing adding 2 numbers");
console.log(`Test passed: ${expected === result}`);
console.log("");
