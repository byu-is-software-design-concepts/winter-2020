//Answer: O(n) linear
function looper(input) {
  //there is a single loop that will only run through a list as long as the input
  //As the length of the input increases, the runtime will increase in a linear matter
  input.forEach(item => {
    console.log(item);
  });
}

//Answer O(n * m) constant
function loopTheLoop(firstSize, secondSize) {
  // not n^2 because of different inputs
  for (let i = 0; i < firstSize; i++) {
    for (let j = 1; j < secondSize; j++) {
      console.log(i, j);
    }
  }
}


//Answer: O(1) constant
function breakTheLoop(innerSize) {
  //because the loop breaks immediately, it will only ever console.log() a single time
  //In addition, this function takes no input, so the runtime wouldn't ever change anyway
  for (let i = 0; i < innerSize; i++) {
    console.log(i);
    break;
  }
}

//Answer O(2^n) exponential
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  //Frankly I'm not entirely sure. I have no idea how fibonacci() runs
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Answer: O(n) linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);
  //Single for loops that change their runtime based on input have a linear relationship with runtime and input size
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //This section is constant, so it isn't considered in the big O calculation
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//Answer: O(n^2 + n) polynomial?
function printAllNumbersThenAllPairSums(arr, size) {
  //This has a linear relationship with size
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //this has a quadratic relationship with size
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
