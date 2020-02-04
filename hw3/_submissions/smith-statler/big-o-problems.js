
//looper O(n). Linear. Solely based on the size of the input.
function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }
  

  //O(a*b)
  function loopTheLoop() {
    // for loop a
    for (let i = 0; i < 45; i++) {
      // for loop b
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }// Total time is for loop a times for loop b. Thus, O(a*b)
  
  //O(1) Constant
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      //Basically only loops once.
      break;
    }
  }
  
  //O(2^N) Exponential
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
    // Each time the function returns a numer greater than 1, 2 more of the same function is called.
  }
  

  //O(N/2) Drop the constant 100 and the single line of code. All that matters is the size of the input array.
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  
  //O(N^2) Drop the non dominant for loop at the beginning of the function. 
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
  