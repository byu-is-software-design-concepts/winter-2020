//Complexity = O(input) or O(n)
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//Complexity = O(loopOne * loopTwo)
function loopTheLoop(loopOne, loopTwo) {
  for (let i = 0; i < loopOne; i++) { //why does this one start at 0 and 
    for (let j = 1; j < loopTwo; j++) { // this one starts at 1? Doesn't that change the actualy value?
      console.log(i, j);
    }
  }
}

//Complexity = O(1)
function breakTheLoop(iCount) {
  for (let i = 0; i < iCount; i++) {
    console.log(i);
    break;
  }
}

//Complexity = O(2^n) --- I don't quite understand this one
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//Complexity = O(n) // I don't quite understand this one either, why isn't it O(n/2)?
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//Complexity = O(n^2)
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
