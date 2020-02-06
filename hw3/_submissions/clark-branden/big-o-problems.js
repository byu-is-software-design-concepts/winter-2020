// Answer: O(n) or linear
function looper(input) {
  // Loops through every item in input => O(n)
  input.forEach(item => {
    console.log(item);
  });
}


// Answer: O(n^2) or quadriatic
function loopTheLoop(firstSize, secondSize) {
  // Iterates through "secondSize" times for each "firstSize" => O(n*n) or O(n^2)
  for (let i = 0; i < firstSize; i++) {
    for (let j = 1; j < secondSize; j++) {
      console.log(i, j);
    }
  }
}


// Answer: O(1) or constant
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
      break; // Logs "0, 1" and then exits the loops => O(1)
    }
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


//Answer: O(n^2) or quadriatic
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    // Loops through "size" times => O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) {
    // Double loop so we already know it's O(n^2)
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
// Add them all together => O(n + n^2)
// Reduce to the most significant term => O(n^2)
