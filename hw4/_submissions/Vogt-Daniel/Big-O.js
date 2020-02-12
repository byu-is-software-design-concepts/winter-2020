// Answer: O(n)
// loops through each item, linear
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(a * b)
// its mulitplication because it loops through second
//size for each first size
function loopTheLoop(firstSize, secondSize) {
  for (let i = 0; i < firstSize; i++) {
    for (let j = 1; j < secondSize; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1)
//only one output
function breakTheLoop(innerSize) {
  for (let i = 0; i < innerSize; i++) {
    console.log(i);
    break;
  }
}

// Answer: O(2^n)
//fibonacci creates a tree of output which is expoential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return recursiveFibonnacci(num - 2) + recursiveFibonnacci(num - 1);
}

//Answer: O(n)
//linear, only loops half
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//Answer: O(n^2)
//loops through entirety, quadratic
function printAllNumbersThenAllPairSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
