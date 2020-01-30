function persistence(num) {
    // Honestly, I worked on this problem for a solid hour and didn't get very far, so the interview wouldn't have gone well lol.
    // This solution I found online follows basically the same thought process I had, except for the final counter return.

    // Convert the inputted num to a string array
    let product = num.toString().split('').map(str);

    // this counter is for keeping track of product of all the digits. It needs to be 1, not 0, for obvious reasons.
    let total = 1;

    // counter keeps track of how many iterations it took to break down the solution to 1 digit
    let counter = 0;

    // mandate condition of 1 digit
    while (product.length > 1) {
        // muliply all the digits in the array together, results in an int
        product.forEach(product => total *= product);

        // convert the final product back into an array
        product = total.toString().split('').map(str);

        // set total back to 1
        total = 1;
        // increment iterations of the while loop
        counter++;
    }

    return counter;
}

////////////////////////// tests //////////////////////////

let result = persistence(39);
let expected = 3;

console.log("Testing peristence of 39");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(4);
expected = 0;

console.log("Testing peristence of 4");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(25);
expected = 2;

console.log("Testing peristence of 25");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(999);
expected = 4;

console.log("Testing peristence of 999");
console.log(`Test passed: ${expected === result}\n`);
