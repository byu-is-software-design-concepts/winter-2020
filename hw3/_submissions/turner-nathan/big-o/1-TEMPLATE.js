function looper(input) {
  // Answer: O(n)
  input.forEach(item => {
    console.log(item);
  });
}

function loopTheLoop() {
  // Answer: O(1)
  // Since it always stops at 45/47, there is a constant number of operators.
  // I saw that in Branden's solutions, this function was different, but here it is constant.
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

function breakTheLoop() {
  // Answer: O(1)
  // Also constant cause it breaks out of the loop on the first iteration.
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

function recursiveFibonnacci(num) {
  // Answer: O(2^n)
  // Creates a recusion tree (read Branden's example on this one).
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  // Answer: O(n)
  // n/2 is still just n when it comes to big O.
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // Answer: O(n^2)
  // Nested loop over the size of the array.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
