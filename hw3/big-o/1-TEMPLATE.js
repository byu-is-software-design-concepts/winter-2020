
//O(N) because you are looping through each item once.
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//We will loop through i 45 times and j 47 times each loop through i. Since we are looping within a loop this is
// O(45 * 47) or O(x * y) if we had different numbers for 45 and 47
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
//We will only loop once, so this is constant time O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}
//Since every call calls itself twice, the number of iterations increases exponentionally. O(2^N)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
// When we add them all up together and get rid of smaller values we get: O(N)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    //O(1)
  console.log("First element of array = %d\n", arr[0]);
    //O(N/2)
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
    //O(100)
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//Adding them together and dropping the lesser values: O(N^2)
function printAllNumbersThenAllPairSums(arr, size) {
    //O(N) since we are iterating through every position of the array.
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
    //Since we are looping through the array's size twice: O(N^2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
