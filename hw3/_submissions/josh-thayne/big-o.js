// answer = O(n)
function looper(input) {
    // This just loops through each item so it's linear
  input.forEach(item => {
    console.log(item);
  });
}

// answer = O(1)
function loopTheLoop() {
    // These are constants so its O(45 * 47) or in other words O(1)
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer = O(1) because it's constant and exits the loop after the first iteration
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}


// Answer = O(2^n) because if the input is 5 it will run 15 times, if it's 18 it'll go 8,361 times, etc. Thus it is 2^n
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}


// Answer = O(1/2*n + 100) or O(n) because we drop constants
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}


// Answer = O(n + n^2) because it runs through the first loop (linear) and then through the nested loop, so 
// final answer O(n^2)
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
