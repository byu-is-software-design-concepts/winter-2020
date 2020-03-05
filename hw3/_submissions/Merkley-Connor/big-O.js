//Represents O(n) because it loops through each item just one time
function looper(input) {
    input.forEach(item => {
      console.log(item);
    });
  }

//Represents O(i * j) because of the first loop "i" iterates through the second time "J" amount of times
  function loopTheLoop() {
    for (let i = 0; i < 45; i++) {
      for (let j = 1; j < 47; j++) {
        console.log(i, j);
      }
    }
  }
  
//Represents O(1) because the first time through the loop it logs 0 and exits the loop. Constant is only thing that remains
  function breakTheLoop() {
    for (let i = 0; i < 45; i++) {
      console.log(i);
      break;
    }
  }

//Represents O(2^n) because it recusively calls itself.
  function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
  
//Represents O(n) because you end up dropping constants
  function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]);
  
    for (let i = 0; i < size / 2; i++) {
      console.log(arr[i]);
    }
  
    for (let i = 0; i < 100; i++) {
      console.log("Hi\n");
    }
  }
 
//Represents O(n^2) because it first loops through first array, but then it loops twice on itself which makes me believe it should be O(n^2)
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