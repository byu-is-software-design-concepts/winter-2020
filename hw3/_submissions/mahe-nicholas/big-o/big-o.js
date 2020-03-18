// o(n)
function looper(input) {
  //iterates array once
  input.forEach(item => {
    console.log(item);
  });
}
//if these arrays were dynamic, it would be o(n^2) but because i is 45 and j is 47, it technically would be o(1) or constant time. it would take the same
function loopTheLoop() {
  // time complexity would be something like 45^47
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//o(1)
function breakTheLoop() {
  //goes in just once
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}
//o(2n)
function recursiveFibonnacci(num) {
  //until num matches the base case, the self function call creates 2 additional function calls each time which compound
  //thus, as num grows, its time will double.
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
//o(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  // first part is contstant time printing just once
  console.log("First element of array = %d\n", arr[0]);
  //for loop gives us a linear time to tack on
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //printing 100 times is also constant time, so the greatest power is the linear time, simplifying to o(n)
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}
//o(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
  //for loop is linear time
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //compounded for loop creates exponential time o(n^2) which is highest power so added with first for loop, it simplifies to o(n^2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
