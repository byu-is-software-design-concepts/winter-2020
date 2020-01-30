//Answer: O(n) or Linear
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//Answer: O(1) or Constant
function loopTheLoop() {
  //The loops will run the same number of times no matter how many times
  //the function is called. Time is constant.
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//Answer: O(1) Constant
function breakTheLoop() {
  //This will always run one time. Time to run will be essentially the same.
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//Answer: O(2^n)
function recursiveFibonnacci(num) {
  //There are two options, each time you increment num by one, it adds two more
  //options for the program to run.
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Answer: O(n) - Constants are dropped when combined with other O's
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) { //Linear O(n/2)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) { //Constant O(1)
    console.log("Hi\n");
  }
}

//Answer: O(n^2) - Non dominate terms should be dropped
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) { //Linear O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) { //Exponential O(n^2)
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
