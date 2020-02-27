// This one is linear O(n)
// Because it goes through every item in the input
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// This one is O(n * a)
// The loop goes through the inner loop every time it goes through the outer loop
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// This one is constant O(1)
// Because nothing is passed into the function so the loop will always run the same no matter what
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// This one is exponenetial O(2^n)
// I honestly dont really understand this one
// Basically the larger num is the more branches the function will trigger making it grow eponentially
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}


// This one is linear O(n)
// since the hi is a constant the 1/2 of the array cancels out and we are left with just the linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  // This loops through the first half of the array
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  // This says hi 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}


// This one is quadratic O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  // this loop is just linear
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // This loop goes through the array twice which is what makes it quadratic
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
