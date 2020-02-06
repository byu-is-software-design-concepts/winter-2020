// O(n) or linear because it loops through each item in the input once
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// O(1) because it has no inputs and is therefore not affected by the input
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// O(1) because it has no inputs and is therefore not affected by the length input
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// i will assume that the fibonacci function calls are referring to itself even though
// the name isnt correct
// it would be O(2^n) because there is potential to call the function twice each time the
// function is called
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// O(n) or linear, because the first and third action are constant for all calls, and the
// second one will always be half of the size
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// O(n^2) because O(n) becasue even though the first loop is O(n), the  set of two loops
// loops through the same variabe twice - meaning 0(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
