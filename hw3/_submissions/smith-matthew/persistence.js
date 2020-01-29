function persistence(num) {
    "use strict";
    let times = 0;
    //We need to be able to iterate over each individual number inside the number passed in
    //In JS this is easiest to do with a string.
    let numString = num.toString();
    let multiple;
    //putting it in a while loop to automatically check the length before each iteration
    while (numString.length > 1) {
        for (let i = 0; i < numString.length; i++) {
            //check if it is the first iteration of the loop to set the multiple value to the first integer value.
            if (i == 0) {
                multiple = Number(numString[i]);
            } else {
                multiple = multiple * Number(numString[i]);
            }
        }
        numString = multiple.toString();
        times = times + 1;
    }
    // TODO: Calculate "persistence"
    return times;
}

//second iteration - use the num variable passed in as a pramater instead of creating a multiple variable.
//this will save on the space required for the program.
function persistence2(num) {
    "use strict";
    let times = 0;
    //We need to be able to iterate over each individual number inside the number passed in
    //In JS this is easiest to do with a string.
    let numString = num.toString();
    //putting it in a while loop to automatically check the length before each iteration
    while (numString.length > 1) {
        for (let i = 0; i < numString.length; i++) {
            //check if it is the first iteration of the loop to set the multiple value to the first integer value.
            if (i == 0) {
                num = Number(numString[i]);
            } else {
                num = multiple * Number(numString[i]);
            }
        }
        numString = num.toString();
        times = times + 1;
    }
    return times;
}

////////////////////////// tests //////////////////////////

let result = persistence2(39);
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
