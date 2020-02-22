//O(n) because it is only calling one linear function 
function looper(input) {
  //lopping through each item
  input.forEach(item => {
    console.log(item);
  });
}

//O(a*b) because it is looping through two different sized variables 
function loopTheLoop() {
  //first loop with going through 45 times
  for (let i = 0; i < 45; i++) {
    //second loop going through 47 times
    for (let j = 1; j < 47; j++) {
      //printing out (1,1), (1,2), (1,3), ...(1,47)
      //then iterating (2,1), (2,2), (2,3), ...(2,47) 
      console.log(i, j);
    }
  }
}

//o(1) only makes it through the loop once before it breaks. 
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    //would log and then break the loop directly after this line
    console.log(i);
    break;
  }
}

//exponential because of recursion 
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  //the  numbers slowly get split into smaller increments until it reaches 0
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//O(1 + n/2 + 100)
//Drop all constants to get O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  //O(1) because it only prints once
  console.log("First element of array = %d\n", arr[0]);

  //O(n/2) because it loops throuhg half of n
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }
  //O(n), n=100 -> O(100), loops through 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//O(n + n^2)
//Simplifies to O(n^2) because of the drop non dominate term 
function printAllNumbersThenAllPairSums(arr, size) {
  //O(n) loop through an array size n
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  //O(n) * O(n) -> O(n^2)
  //nested loop going through an array of the same size
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}
