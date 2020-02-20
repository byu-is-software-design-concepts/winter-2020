//O(n) because the printout time depends on the size of the input
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}
//O(1) because the printout is always the same length because of the 45 and 47
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//O(1) because the program always runs once and then breaks
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//O(2^n) because the function recursively calls itself indefinitely until the conditional statement is satisfied
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//O(n) because the function runtime is ultimately dependant on how many items are in the array
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// O(n^2) because the most relevant function is the nested function (the first function becomes irrelevant with an array of a large size)
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
