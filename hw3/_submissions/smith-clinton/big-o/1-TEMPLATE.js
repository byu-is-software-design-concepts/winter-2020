//Answer: O(n)
function looper(input) {
    // Loops through every item in input
  input.forEach(item => {
    console.log(item);
  });
}

//Answer: O(n * s)
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j); //Loop inside of a loop so they are multiplied
    }
  }
}
//Answer: O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
    //Exits the loop right away
  }
}
//Answer: O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
  //2 nodes can be added to each layer potentially
}
//Answer: O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); // Runs one time = O(1)

  for (let i = 0; i < size / 2; i++) { // Loops through half = O(n/2)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) { // Loops through 100 times = O(100)
    console.log("Hi\n");
  }
}
//Answer: O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) { // Loops through whole size = O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) { //Double loop = O(n^2)
      console.log(arr[i] + arr[j]);
    }
  }
}
