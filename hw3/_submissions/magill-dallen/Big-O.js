//Answer: O(n) - linear
function looper(input) {
  //iterates through one object (input), time would depend on size of (input)
    input.forEach(item => {
      console.log(item);
    });
  }

  //Answer: O(1) - constant
  //size of object would never vary.  It would always do 45 and then 47
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
  //Answer: O(45) - constant
  //size of object would never vary.  It would always do 45
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }
  
  //Answer: O(n^2)
  //the if statement is a constant and the fibonacci is exponential.
  //this means that in simple terms you drop the constant.
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  

  //Answer: O(n).  add O(n/2) + O(100) and drop constants
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
    
    //O(n/2) since it depends on the array size/2
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    //O(100) constant since it will always be 100
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  
  //Answer: O(n^2)
  //add O(n) + O(n^2) and drop the n
  function printAllNumbersThenAllPairSums(arr, size) {
    //O(n)
    for (let i = 0; i < size; i++) {
      console.log(arr[i]);
    }
    
    //total: O(n^2)
    //first for loop: O(n)
    for (let i = 0; i < size; i++) {
      //second for loop: O(n)
      for (let j = 0; j < size; j++) {
        console.log(arr[i] + arr[j]);
      }
    }
  }