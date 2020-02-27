//Answer: O(n)
function looper(input) {
  //It is linear. Loops through every item in the input.
  input.forEach(item => {
    console.log(item);
  });
}

//Answer: O(i * j)
function loopTheLoop() {
  //It has two for loops that have two different numbers.
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
//However, I could see this being constant because not matter what it will always be the same
//because of the hard coded 45 and 47

//Answer: O(1)
function breakTheLoop() {
  //It has one for loop, however there is a break so it is constant
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//Answer: O(2^n)
function recursiveFibonnacci(num) {
  //This recursive function creates a binary tree of calls which grows exponential growth
  //each layer that is made.
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Answer: O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  //This is a constant but you drop it
  console.log("First element of array = %d\n", arr[0]);
  //this O(n/2)
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //this is 0(100) but you drop it
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//After adding them all up and droping the constants you get O(n)

//Answer: O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  //Loops through the array and is O(n) but you drop it
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  //Loops through the array exponentially so it is O(n^2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
