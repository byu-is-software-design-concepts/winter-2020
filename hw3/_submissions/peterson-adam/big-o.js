// O(n)
function looper(input) {
  // One input equals one loop O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// O(firstloop * secondloop)
// Techically, this doesn't have an input so the actual answer is O(46 * 48)
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    // first loop runs 46 times
    for (let j = 1; j < 47; j++) {
      // second loop runs 48 times per first loop
      console.log(i, j);
    }
  }
}

// O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    // The code will run once and then break regardless of input
    break;
  }
}

// O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  // recusrsion leads to an expenontial growth
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// O(n/2 + 101)
// Remove insignificant digits 
// Answer: O(n/2)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  // O(1)
  // Prints once
  console.log("First element of array = %d\n", arr[0]);

  // O(n/2)
  // Loops through half of the array
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  // O(100)
  // Loops 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//O(n+n^2)
// Remove insignificant digits 
// Answer: O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  // O(n)
  // Loops through once for each elemetn
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // O(n^2)
  // Nested loop is squared
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
