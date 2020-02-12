// Linear - O(n)
// The function just loops through n times and finishes
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// O(1)
// Even though this has a loop and nested loop, it would be O(1)
// because it is constant. Every time the function is run, it 
// would take the same amount of time
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// O(1)
// This would also be constant. The loop doesn't actually loop,
// it just finishes after one iteration every time
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// O(2^n)
// Every time n increases by one, the function must run through
// all its function calls again. It's exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// O(n)
// Even though there are two for loops, the O would still be just n
// also, the second loop is constant, so it is irrelevant in
// big-O notation
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// O(n^2)
// The most significant loop is the second one, because it has a 
// nested for loop inside, making it a n^2, or quadratic notation
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
