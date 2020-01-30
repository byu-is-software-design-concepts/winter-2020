class StringCalculator {
  Add(nums) {
    // TODO
    let arr = nums.split(",")
    if (nums === "") {
      return 0
    } else {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
      }
      return sum
    }
    return nums
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
