//O(n)  Iterates through the loop for every item in the input
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//O(45 * 47) Becuase each time you iterated through the first loop, you have to itereate throug the second loop
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//O(1) the first time through the loop it will break and keep going regardless of the size of n
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//0(2^n) as n increases the number of times the function is called increases exponentially.
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//O(n) the first loop has big O of n/2.  The second loop has a big O of 100.  Droping constants and rounding up you get O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//0(n^2)  The first for loop has a big O of n and the second loop has a big O of n^2.  
Reducing to the most sigificant term you get O(n ^ 2) 
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
