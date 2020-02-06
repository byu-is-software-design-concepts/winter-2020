function looper(input) {
    input.forEach(item => {
      console.log(item); //For each loop will iterate over the size of the input. This would be a constant growth
    });
  }
  
  /*
  Answer 1. O(n)
  */
  
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
  /*
  Answer 2. O(a * b)
  Because loops i and j are different ranges they cannot be determined by the same variable n, therefore two variables are multiplied together
  */
  
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break; //breaks and therefore only runs the for loop 1 time
    }
  }
  
  /*
  Answer 3. O(1)
  */
  
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }//Because this recursive function calls the function n twice each call would have an exponential growth of the count of function n
  
  /*
  Answer 4. O(2^n)
  */
  
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
  /*
  Answer 5. O(n)
  Because the for loops are asynchronous this would be a linear function. Growth is at a mathematical constant rate
  */
  
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
  /*
  Answer 6. O(j + n^2) or O(n^2)
  since i < size size is the same the loops can be identified by the same variable n
  get rid of constants
  */