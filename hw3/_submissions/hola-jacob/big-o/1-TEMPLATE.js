// Answer: O(n) linear
function looper(input) {
  // Function loops through every item in the input.  O(n)
  input.forEach(item => {
    console.log(item);
  });
}

//Answer: O(i*J) . I also think that it could be O(1) since it is not accepting inputs, but the answer said it was linear. 
//I only kept it as linear because the 'i' and 'j' are not const. But you can't really change them since they are delcared in the loop. I am still confused...
function loopTheLoop() {
  //The amount of times that the second 'for' loop is used slightly depends on the first loop
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//Answer O(1) constant. The function breaks after running once
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//Answer 0(2^n)
//As the numbers get larger the number of sequences increases to sum the numbers
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Answer: O(n) linear. The size will drive how many times some functions run
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);// Always runs once O(1)

  for (let i = 0; i < size / 2; i++) {//Loops through half of size O(n/2)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {//always loops 100x O(100)
    console.log("Hi\n");
  }
}

//Answer O(n2). We drop the n because it is non-dominant
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {//Loops through the size variable O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < size; i++) {///The loop goes through twice comparing to the same variable O(n^2)
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
