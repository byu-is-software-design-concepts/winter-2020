class StringCalculator {
  Add(nums) {
    // TODO
    if (nums == "") {
      nums = 0;
    } else {
      let numArr = nums.split(",");
      nums = 0;
      for (let i = 0; i < numArr.length; i++) {
        nums += Number(numArr[i]);
      }
    }

    return nums;
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
