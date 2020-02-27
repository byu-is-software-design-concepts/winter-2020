// Answer: O(n) -- only loop through each item once
  function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }
  
// Answer: O(1)
  function loopTheLoop() {
    //loops through 45 times -- ignore constants
    for (let i = 0; i < 45; i++) {
      //loops through 47 times -- ignore constants
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
// Answer: O(1)
  function breakTheLoop() {
    //loops through once because of the break
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }
  
// Answer: O(2^n)
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    //calls itself twice
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  
// Answer: O(n) 
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
    //only goes through the loop for half of the elements, but you drop constants
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
    //loops 100 times, drop constants so it's not calculated in O
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  
// Answer: O(n^2)
  function printAllNumbersThenAllPairSums(arr, size) {
    //loops through once => O(n) -- this gets ignored because n^2 is greater
    for (let i = 0; i < size; i++) {
      console.log(arr[i]);
    }
    
    //loops through n*n times
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        console.log(arr[i] + arr[j]);
      }
    }
  }
  