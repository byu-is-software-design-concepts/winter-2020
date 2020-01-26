// O(n)
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// O(1) because the limits are both
// constants even though double for loop
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//O(1); the loop will only ever go through just one iteration
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// O(n); drop the constant (1/2 * size) 
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
