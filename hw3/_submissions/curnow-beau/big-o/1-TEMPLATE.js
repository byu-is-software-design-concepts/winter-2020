
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}
//ANS => O(n) As the length of input increases by 1 the number of times the for each grows is by 1. 

function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j); 
    }
  }
}
//ANS => O(i*j) (For each increase of i by 1 the j loop must be runn )

function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}
//ANS => O(1) (Constant, it will break no matter i's value )


function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1); //functions increase exponentially as n increases
}
//ANS => O(2^N)

function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); // Constant

  for (let i = 0; i < size / 2; i++) { // => O(n/2) - 2 is a constant, it will go up by half for every increase by 1
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) { // => Constant
    console.log("Hi\n");
  }
}
// => O(n) linear 

function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  } // => O(n) linear

  for (let i = 0; i < size; i++) { //double for loop same variable => O(n^2)
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
//ANS => O(n^2) because that has a greater influence in the long run.