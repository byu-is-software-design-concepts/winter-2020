//ANSWER: o(n) loops through each item once
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//ANSWER: o(1) runs a fixed number of times
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//ANSWER: o(1) runs a fixed number of times
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//ANSWER: o(n) runtimes depends on the input in this function
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//ANSWER: o(n) runtimes depends on the input in this function and for loops are not nested
// it would actually be o(2n) but constants are ignored, so o(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//ANSWER: o(n^2) nested for loops  dependent upon the size
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
