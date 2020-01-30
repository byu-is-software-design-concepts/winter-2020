// Answer: O(n) - Direct time/input relationship
function looper(input) {
  // loops through each item in the input and logs it
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(1) - Constant time regardless of input
function loopTheLoop() {
  // O(1) - loops 45 times
  for (let i = 0; i < 45; i++) {
      // O(1) - loops 47 times and logs the number of both loops
      for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1) - Constant time regardless of input
function breakTheLoop() {
  // loop breaks after first iteration
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// Answer: O(n^2) - time exponentially grows with input size
function recursiveFibonnacci(num) {
    // exits function if input <= 1
    if (num <= 1) return num;
  // returns a fib sequence
         // I think these are supposed to be recursiveFibonacci()?
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// Answer: O(n) - time not related to input size
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  // O(n) - logs half of the inputted array
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  // O(1) - logs hi 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// Answer: O(n^2) - time grows exponentially depending on input size
function printAllNumbersThenAllPairSums(arr, size) {
  // O(n) - logs the inputted array
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  // O(n^2) - iterates through array
  for (let i = 0; i < size; i++) {
    // nested iteration of the array, logs the double of each index's value
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
