//O(n)
function looper(input) {
  //this will compute the number of times as there is input, so we it's O(n)
  input.forEach(item => {
    console.log(item);
  });
}

//O(n^2)
function loopTheLoop() {
  //two nested loops means O(n^2) because we touch each element n times n
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

function breakTheLoop() {
  // O(1)
  //this will always execute at almost exactly the same speed each time and is not 
  //determined by a specific n. Also, it only loops one time because it breaks. This will take milliseconds to 
  //compute on any modern computer.
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
      break;
    }
  }
}

//O(2^N)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  //We loop through n number of items. Constants don't matter, so even though it's 1/2N that still equals N
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  //Adding 100 exactly would technically be 1/2N + 100. We get rid of constants, so it's still O(N)
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//O(N^2)
function printAllNumbersThenAllPairSums(arr, size) {
  //so far we have O(N)
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }

  //Nested loops. This is the most complex thing we do, so it determines the big O notation.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
