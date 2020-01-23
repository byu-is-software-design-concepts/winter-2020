// Answer: O(n) or linear
function looper(input) {
  // Loops through every item in input => O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(s * f) (n can really be any variable)
function loopTheLoop(firstSize, secondSize) {
  // Remember, use different variables for different inputs
  // Iterates through "secondSize" times for each "firstSize" => O(second * first) or O(s * f)
  for (let i = 0; i < firstSize; i++) {
    for (let j = 1; j < secondSize; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1) or constant
function breakTheLoop(innerSize) {
  for (let i = 0; i < innerSize; i++) {
    console.log(i);
    break; // Logs "0" and then exits the loops. So it only runs once => O(1)
  }
}

// Answer: O(2^n) or exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return recursiveFibonnacci(num - 2) + recursiveFibonnacci(num - 1);
}
// Each call of recursiveFibonacci creates a binary tree of calls
// As num grows, we add another layer to each node
// Potentially adding 2 nodes in the new layer for each node in the previous layer
// Visualizing it (like below) makes it easier to see that this means exponential growth of each layer
// AKA the dirty and simple calculation used for industry (which is 99% right) is O(2^n)
// The academic "right" answer is gross and involves a lot of math leading you to the O(the golden ratio(1.6180) ^ n)
//
//               fib(4)             1
//            /          \
//          fib(3)       fib(2)     2
//         /    \         /   \
//   fib(2)  fib(1)  fib(1) fib(0)  4
//    /   \
// fib(1) fib(0)                    potential of 8

//Answer: O(n) or linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); // Runs once => O(1)

  for (let i = 0; i < size / 2; i++) {
    // Loops through half of whatever size is => O(n/2)
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
