// Answer: O(n) or linear
function looper(input) {
  // Loops through every item in the input once => O(n)
  input.forEach(item => {
    console.log(item);
  });
}

// Answer: O(45*47) or O(2115)
function loopTheLoop() {
  // Iterate through 47 times for each 45 times
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// Answer: O(1)
function breakTheLoop() {
  // After logging 0 it will break the loop
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// Answer: O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
  // When num = 6
  //           6                  1
  //       /      \ 
  //      4           5           2
  //     / \        /    \
  //    2   3      3      4       4
  //   / \   / \   / \    / \  
  //  0   1  1  2  1  2   2  3    8
  //                        / \
  //                       0  1
  // which grows exponentially
} 

// Answer: O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  // loop through half = O(n/2)
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  
  // loop through 100 = O(100)
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
  // O(50n) is same as O(n)
}

// Answer: O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  // loop trough once = O(n)
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // loop thougth n for each size of n which is O(n^2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
  // O(n + n^2) is same as O(n^2)
}
