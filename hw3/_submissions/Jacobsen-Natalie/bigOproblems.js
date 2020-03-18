
//O(n) or linear. It loops through every item once, which makes it linear.
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

//O(n^2) or quadratic. Since this one has to go through two for loops imbedded in each other, and print out items from each, you have to calculate the time to go through both. Because the second for loop is in the first one rather than just after it, you have to square n. (Quadratic)
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}

//Original thought:
//Originally I thought O(n) or linear. I thought this ends up being linear because only one action is performed for the inner for loop each time. The inner for loop basically becomes a constant, so I'm dropping it. It's basically a for loop with a for loop inside of it that isn't actually needed. 
//the break statement breaks out of the inner for loop but the outer for loop will still run multiple times for each number up to 44.
//Updated thought:
// After reading back through some things and looking at Branden's, I realized it's only counted as linear if it's a for each loop. This would be O(45), which is a constant.
//So, O(1) or constant.
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
      break;
    }
  }
}

//This file was incorrect in comparison to Branden's answer key. The top one is the original in this file, but the bottom is how it should be according to the answers.
//this one creates calls within calls within calls until the number is eventually small enough. This one kind of confused me, but I guess that it makes sense that it is O(2^n) because it will continue n times until num is less than 1.
//O(2^n) or expontential.
function recursiveFibonnacci(num) {
  if (num <= 1) return num; 
  return fibonacci(num - 2) + fibonacci(num - 1);
}

function recursiveFibonnacci(num) {
  if (num <= 1) return num; 
  return recursiveFibonacci(num - 2) + recursiveFibonacci(num - 1);
}

//O(n) or linear. Originially it is O(1 + n + 100). I drop the constants of 1 and 100. The first for loop runs for each item in the array so it is dependent on the array size and has to be included in the runtime calculation.
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

//O(n^2) or quadratic. It would technically be O(n * n^2), but we drop the non-dominant term, so it becomes O(n^2).
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
