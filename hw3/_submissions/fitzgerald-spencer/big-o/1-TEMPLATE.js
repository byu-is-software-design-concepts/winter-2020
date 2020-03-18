// Answer: O(n) or linear
function looper(input) {
  // Loops through every item in the input array once.
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(1) or constant
function loopTheLoop() {
  // Loops a constant of 45 times
  for (let i = 0; i < 45; i++) {
    // Loops a constant of 47 times 
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1) or constant
function breakTheLoop() {
  // Only runs through the loop once and then breaks out of the loop.
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// Answer: O(2^n) or exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  // I had to look at Branden's solution for this one, but it makes sense with the binary tree example that he has on his solution.
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// Answer: O(n) or linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  // constant 1
  console.log("First element of array = %d\n", arr[0]);

  // n/2
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  // 100
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
  //add together and drop constants: O(1+n/2+100) = O(n)
}

// Answer: O(n^2) or quadratic
function printAllNumbersThenAllPairSums(arr, size) {
  // O(n)
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // O(n^2) => Both loops are looping through size. Looping through size, or n, twice is quadratic
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
  //Add them together and drop constants: O(n + n^2)
  //Reduce to most significant term => O(n^2)
}
