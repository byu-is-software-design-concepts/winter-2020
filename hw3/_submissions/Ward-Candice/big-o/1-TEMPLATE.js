
// Answer: O(n) or linear
function looper(input) {
  // Loops through every item in the input once => O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(1) or constant
function loopTheLoop() {
  // Loops through O(45*47) or less
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1) or constant
function breakTheLoop() {
  // Only prints 0 then breaks
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// Answer: O(2^n) or exponential
function recursiveFibonnacci(num) {
  // Each call of recursiveFibonacci creates a binary tree of calls
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Answer: O(n) or linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); 
  // Runs once => O(1)

  for (let i = 0; i < size / 2; i++) {
    // Loops through half of n => O(n/2)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    // Loops through 100 times => O(100)
    console.log("Hi\n");
  }
}
// Add them all together => O(1 + n/2 + 100)
// Drop constants => O(n)

//Answer: O(n^2) or quadratic
function printAllNumbersThenAllPairSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Loops through the entire array => O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    // Double loop of the same variable so we already know it's O(n^2)
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
// Add them all together => O(n + n^2)
// Reduce to the most significant term => O(n^2)