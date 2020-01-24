
//Linear or O(n), each item is looped through and print only once
//ANSWER: O(n)
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//constant or O(i*j), the nested loop requires multiplication to make sure all possible outcomes are accounted for
//ANSWER: O(i*j)
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//O(1) or constant, will only go through the loop once and break so constant
//ANSWER: O(1)
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

//O(2^n) or exponential time because the next output becomes the next input which creates a computionally heavy function
//ANSWER: O(2^n)
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

//O(1)+O(n/2)+O(100)=O(n) which is linear as stated in the first one, but you ignore the constant outputs
//ANSWER:O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//O(n)+O(n^2)=O(n+n^2) reduce to O(n^2)
//ANSWER:O(n^2)
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
