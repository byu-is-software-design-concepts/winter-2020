function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
  //Answer: O(n) or linear because each item is looped through and printed only once
}

function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
  //Answer: O(i*j) => 2115, the nested loop requires multiplication to account for all possible outcomes
}

function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
  //Answer: O(1) or constant because the loop will only execute once through and then break after i is printed
}

function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
  //Answer: O(2^n) or exponential time because each output becomes the next input which quickly create a computationally intensive function
}

function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);
  //O(0) or constant
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //O(n/2) or linear
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
  //O(0) or constant
  //Answer: The constant outputs should be ignored because they never change in complexity and won't go to infinity,
  // so this function retains a time complexity of O(n) or linear
}

function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //O(n) or linear

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
  //O(n^2) because of the nested loop
  //Answer: Combine the complexities to make O(n + n^2) which accounts for both loops and describes the complexity
  //Reduced: O(n^2)
}
