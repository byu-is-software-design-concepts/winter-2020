function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}
//Answer : O(n)
// It takes a certain amount of time to log each item, so as the input of items increases, 
// so does the time.

function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
//Answer : O(1)
// There is no input, every time this tuns it will be based on getting to 45 and 47 so it's constant.

function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}
//Answer : O(1)
// The loop breaks after the first iteration, and so the run time is constant.


function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
//Answer : O(2^n)
// As the number gets higher layers are added to each node

function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//Answer : O(n)
// Because the second for loop is dependant on the size of the input number, 
// it scales linearly based on that number.

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
//Answer : O(n^2)
// The second loop is a double loop of the same variable