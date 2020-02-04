// O(n) because it iterates through each item of the list once
function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }
  
  //O(1) though there are two nested for loops, they will only run a constant number of times so the big O simplifies to constant time
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
  // this function is also constant time 
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }
  
  //O(2^n)
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  // O(n) because one of the loops of the for loops is proportinal to the size of the size parameter
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  
  // O(n^2) because of the nested for loops that iterate through each item of the input array 
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
  