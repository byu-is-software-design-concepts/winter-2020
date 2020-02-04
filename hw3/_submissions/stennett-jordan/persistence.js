// Listen: In my own words, the objective of this problem is to find how many iterations it takes of multiplying
// the indiviudal digits of a number by each other for the product to eventually be a single digit.

// Draw an example: an example is the number 467. 4 * 6 * 7 = 168, 1* 6 * 8 = 48, 4 * 8 = 32, 3 * 2 = 6
// therefore the answer is 4 iterations.

// State a brute force: I could write an algortithm that does what I did manually in the "Draw an example step"

// Walk through: I created a recursive helper function that accepts the product of each digit of the current number until it hits a base case of there being only one digit
// each time the function is called it increments the times counter by one
// return the times counter at the end

// Implement: Implementation below vvvv

// Test: Ran the tests and it worked!

// Don't give up: I didn't :)



function persistence(num) {
    let times = 0
    // TODO: Calculate "persistence"
    let helper = (current) => {
        let currentArr = current.toString().split('')
        if (currentArr.length === 1) return

        times++
        let product = currentArr.reduce((accumulator, item) => {
            return accumulator * item
        }, 1)

        helper(product)
    }

    helper(num)

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
  