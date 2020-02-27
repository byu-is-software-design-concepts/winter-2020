// O(i)
// this loops through every item.
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

// O(j * i)
// for every 'i' it goes 'j' number of times
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

// O(1)
// only goes through the loop one time because of the break.
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

// O(2^n)
// complexity grows exponentially as num increases
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  // O(s/2) loops through half as many times as size
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  // 0(100) because this only loops 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

// O(s^2) we can disregard O(s) 
function printAllNumbersThenAllPairSums(arr, size) {
  // O(s) it loops size times.
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  // O(s^2) this is a double loop of size
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
