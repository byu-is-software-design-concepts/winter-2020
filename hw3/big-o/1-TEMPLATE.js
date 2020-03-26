<<<<<<< HEAD
=======
// O(n), because it just simply iterate thru a iterable
>>>>>>> holle-tanner
function looper(input) {
  input.forEach(item => {
    console.log(item);
  });
}

<<<<<<< HEAD
=======
// O(AB) because there're two independent variables
>>>>>>> holle-tanner
function loopTheLoop() {
  for (let i = 0; i < 45; i++) {
    for (let j = 1; j < 47; j++) {
      console.log(i, j);
    }
  }
}
<<<<<<< HEAD

=======
// O(1) this is constant because the for loop never loops in this case 
>>>>>>> holle-tanner
function breakTheLoop() {
  for (let i = 0; i < 45; i++) {
    console.log(i);
    break;
  }
}

<<<<<<< HEAD
=======
// O(2^n) because each of the function call just digs on layer deeper into the tree, it makes the run time increase exponentially
>>>>>>> holle-tanner
function recursiveFibonnacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

<<<<<<< HEAD
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);

=======
// O(n) after droping all the constants, we know only the n matters in this case
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
  console.log("First element of array = %d\n", arr[0]);
 
>>>>>>> holle-tanner
  for (let i = 0; i < size / 2; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi\n");
  }
}

<<<<<<< HEAD
=======
// O(n^2) we need to drop the first n because as n increases, the n become less and less significant compared to n^2, therefore dropped it
>>>>>>> holle-tanner
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
