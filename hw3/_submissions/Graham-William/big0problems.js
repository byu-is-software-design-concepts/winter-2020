function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}
//Answer: 0(n) Just one loop to execute.

function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
// Answer: 0(n^2) has to loop through both for loops before finishing.

function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
      break;
    }
  }
} 
// Answer: 0(1) constant. Only loops through once then breaks.

function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
// Answer: 0(2^n) Exponential. The recursiveness continues to add nodes and create a binary tree.

function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
// Answer: 0(n) - first console.log is just 0(1), second is 0(n/2), and third is 0(100)
// if you add them up and drop constants, it just comes down to 0(n)
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
// Answer: 0(n^2) - first console.log is just 0(n) and second is 0(n^2). In this case we reduce to most significant
// term. 
