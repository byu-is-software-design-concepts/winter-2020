//O(1)
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}
//Always 1 iteration no matter the number of items

//O(f*n) where n could be any number depending on the two inputs for each loop
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
//iterates n amount of times for each iteration of the first for loop or O(f * n)

//O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}
//iterates only once then the output of i is logged as 0 and the loop breaks

//O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
//The recursive fibonacci equation is T(n)=T(n-1)+T(n-2)+O(1) which equates to O(2^n)
//So this function will iterate 2^n 

//O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//The first array iterates once while the second will iterate n/2 times with the third always iterating 100 times
//So O(1 + n/2 + 100) or O(n)

//O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //iterate O(n) times

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
  //iterate the same loop twice so O(n^2)
}
//so the loops combined equals O(n + n^2) or just O(n^2)
