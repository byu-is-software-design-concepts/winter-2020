// ANSWER: Time Complexity is O(n) or linear
function looper(input) {
  // This function loops through each item in the input => O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// ANSWER: Time Complexity is O(secondLoop * firstLoop) => O(47 * 45) => O(some constant) => O(1) or constant
function loopTheLoop() {
  // This function loops through the "secondLoop" loop n times for each "firstLoop" loop, n being O(secondLoop * firstLoop)
  for (let i = 0; i < 45; i++) { // firstLoop size = 45
    for (let j = 1; j < 47; j++) { // secondLoop size = 47
      console.log(i, j);
    }
  }
}

// ANSWER: Time Complexity is O(1) or constant
function breakTheLoop() {
  // This loops only runs only before it breaks out of the loop
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// ANSWER: Time Complexity is O(2^n) or exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
// I think Branden Clark's visual and text explanation best explains the logic behind this loop:
// Each call of recursiveFibonacci creates a binary tree of calls
// As num grows, we add another layer to each node
// Potentially adding 2 nodes in the new layer for each node in the previous layer
// Visualizing it (like below) makes it easier to see that this means exponential growth of each layer
//
//               fib(4)             1
//            /          \
//          fib(3)       fib(2)     2
//         /    \         /   \
//   fib(2)  fib(1)  fib(1) fib(0)  4
//    /   \
// fib(1) fib(0)                    potential of 8

// ANSWER: Time Complexity is O(n) or linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); // This runs once => O(1), n = 1 => still O(n)

  for (let i = 0; i < size / 2; i++) { // This loops through half of size => O(n/2) => still O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) { // This loops through 100 times => O(100), n = 100 => still O(n)
    console.log("Hi\n");
  }

  // Add all values together to get O(1 + 1/2 + 100), then drop constants => still O(n)
}

// ANSWER: Time Complexity is O(n^2) or quadratic
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) { // This loops through the array => O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) { // This nested for loop is O(n^2) since looping through the same variable
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }

  // Add all values together to get O(n + n^2), then drop constants => still O(n^2)
}
