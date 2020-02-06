
//O(n) ... looping n number of times for each item
function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }
  
//O(n^2) ... loops through n n number of times
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
  //O(1) ... constant, only loops one time
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }
  
  // O(2^n) ... potentially exponential
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  
  //O(n) because of the first for loop, we drop everything else bc it's constant
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  
  //O(n^2) because of the second loop, drop the other loop because it's big-o is smaller
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