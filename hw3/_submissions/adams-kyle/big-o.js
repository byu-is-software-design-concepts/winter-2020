  //Answer: O(n)
  function looper(input) {
    //loops for each item in the array
    input.forEach(item => {
      console.log(item);
    });
  }
  //Answer: O(a * b)
  function loopTheLoop() {
    //two arrays here, so add them together
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  //Answer: O(1)
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      //the loop is broken here so there it only runs once
      break;
    }
  }
  //Answer: O(2^n)
  function recursiveFibonnacci(num) {
    //no matter what, this will run O(2)
    //it is exponential because it can return many more items
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  //Answer:O(n) 
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
    //O(n) here is reduced by half
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
    //O(100) after running 100 set times
    //that leaves O(100 + n/2) => O(n)
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }

  }
  //Answer:O(n^2)  
  function printAllNumbersThenAllPairSums(arr, size) {
    //O(n)
    for (let i = 0; i < size; i++) {
      console.log(arr[i]);
    }
    //O(n^2)
    //reduces overall because we don't say O(2n^2)
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        console.log(arr[i] + arr[j]);
      }
    }
  }
  