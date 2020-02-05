
//I relied heavily on Branden's code as usual

//Linear
//O(n)
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//O(a * b)
//two different variables in a nested loop
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//Only runs once because of the break
//O(1) Constant
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//recursive stuff. As Branden says:
//O(n^2) exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//all constants
//O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  //O(1) constant
  console.log("First element of array = %d\n", arr[0]);
  //O(a) linear
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //O(b) linear
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}


//Drop the contants to get:
//O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  //loop through once
  //O(n)
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  //O(a*b)
  //loop through the same variable = O(n^2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
