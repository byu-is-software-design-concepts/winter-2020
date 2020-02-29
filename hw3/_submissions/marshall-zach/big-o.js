// BigO(n) because the loop will iterate as many inputs you give it. n times.
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// BigO(45 * 47) because it will loop through the nested loop outer loop number of times. In this case it's 45 and 47.
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}


// BigO(1) because it will only ever loop through once and then exit on the break statement.
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}


// BigO(2^n) because as n get larger, the number of recursive function calls grows exponentially
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// BigO(n) Since call happens 0.5n + 100 times, we drop the contants of 0.5 and 100 to just get n.
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// BigO(n^2) the first for loop is size BigO(n) plus the second loop is BigO(n) * the inner loop of BigO(n)
// ends up being n + (n * n) = n^2 + n. Since we only care about the biggest factor, we drop n and get BigO(n^2)
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
