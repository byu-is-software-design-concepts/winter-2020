// Answer: Linear O(n)
function looper(input) {
  // Loops through each item in the input once => O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(s * f)
function loopTheLoop() {
  // Loops through constant number of times
  // Iterates 47 times for each of 45 times
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break; // Only runs once through the loop and then hits the break
  }
}

// Answer: O(2^n) Exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  // Each time the recursive call is made, two nodes are created
  // This continues until each node resolves, which results in exponential growth
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// Answer: O(n) Linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  //Runs once; Drop constants
  console.log("First element of array = %d\n", arr[0]);
  // Loops through size / 2 and we drop the constant to get O(n)
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  // Loops through a constant number of times; Drop constants
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// Answer: O(n^2) Quadratic
function printAllNumbersThenAllPairSums(arr, size) {
  // Loops through array once O(n); Drop less significant terms
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // Nested loop of size O(n^2); Keep most significant term
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
