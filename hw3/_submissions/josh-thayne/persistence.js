// Here is my solution to persistance. This may not be as sophisticated as some of Branden's solutions, but it works.
// It seems a little brute force, but I'm not sure how else to do it. 

function persistence(num) {

    let times = 0
    let oneDigit = false
    let numStr = num.toString()
    let newNum = 1
    while (!oneDigit) {
        if (numStr.length == 1) {
            // check to see if it is one digit
            oneDigit = true
            continue
        }
        for (let strIndex = 0; strIndex < numStr.length; strIndex++) {
            newNum *= parseInt(numStr[strIndex])
        }
        numStr = newNum.toString()
        newNum = 1
        times += 1
    }
    

    return times;
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
