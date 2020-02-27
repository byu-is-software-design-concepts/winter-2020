//This one would be O(n) because it simply loops through each of the items
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//This would be O(1) because the numbers being used are constant and not simply variables
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//This is also O(1) because of constants
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//This is O(2^n) because it causes a tree to be built. See Branden's explaination for a full description
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//This is O(n) because after dropping all constants we are only left with one for loop that goes through half the size
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]); //Constant

  for (let i = 0; i < size / 2; i++) { //O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) { //Constant
    console.log("Hi\n");
  }
}

//This is O(n^2) because of the second for loop which has another for loop inside of it both based on size
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
