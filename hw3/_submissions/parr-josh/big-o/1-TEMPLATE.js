//O(n) --Linear
//Because Loops through every itme in input
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//0(47*45) --Constant
//Becuase it loops a 45 and 47 times exactly before exiting the function
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//0(1) -- Constant
//Because it breaks out of the loop after runing one time
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//O(2^n)
//Fibonnacci sequence creates a possible 2 new calls for each new call made. Exponetial growth
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//0(n) --Linear
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);
  //0(1)
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //0(n/2)
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
  //O(100)
}

//O(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //0(n)

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
  //O(n^2)
}
