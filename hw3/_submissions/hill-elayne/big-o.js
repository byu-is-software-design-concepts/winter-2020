//This function is linear, so O(n). It iterates for each item in the input once and then exits. 
function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }

  //O(1) or constant because it will always iterate the same number of times since the inputs (45 and 47) never change
  //So I guess it's O(45 * 47) ?
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
  //constant O(1) because it runs once and then terminates
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }
  
  //exponential O(2^n) because the function adds 2 'nodes' for each node in the previous layer
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }

  //the first statement is O(n/2) and the second is O(100)
  //so added and then simplified makes it O(n) linear
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  

  //The first one is just O(n), and the second is O(n^2) because it is a nested for loop with the same variable as inputs
  //so it's just O(n^2)
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
  