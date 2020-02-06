//1. Listen: I need to take in a positive number as num (do I need to check if it is positive to start)
//What is multiplicative persistence? I would ask them. It is the number of times that you need 
//to multiply a number by itself until you get a single digt. The process seems to return smaller
//numbers every result.

//2. Draw an example:
//number 145 (1 * 4 * 5) => 20 => (2 * 0) => 0 and this is lower than 9 so it took 2
//number 989 (9 * 8 * 9) => 648 (6 * 4 * 8) => 192 => (1 * 9 * 2) => 18 (1 * 8) => 8 so it took 4
//To do this by hand I had to seperate the numbers, times them by each other, find the result,
//if the result was lower then 10 then I would be done, if not then I would keep going. I also kept 
//track of how many tiimes I did each submation

//3. State a brute force: I'm going to start by checking to see if it is a num lower then 10 and then
//if not I am going to iterate through an array of numbers that I create to add them up. As I am
//doing this I am going to keep track of the times and then output the results. I might use a do 
//while loop. 

//Here is my first working product. It is tested and works. I am going to try and optimize it know.
/*function persistence(num) {
  let times = 0 
  let currentTotal = 1
  let digits = []
  if(num < 10)
  {
    times = 0
  }
  else
  {
    do {
      digits = num.toString().split('').map(Number)
      for (item of digits)
      {
        currentTotal *= item 
      }
      times = times + 1
      num = currentTotal
      currentTotal = 1
    } while(num >= 10);
  }
  return times
}*/

//4. Optimization: Well I figured out there is a reduce function which I used to clean up my code
//and just using that optimized my brute force product by a lot.

function persistence(num) {
  let times = 0
  while (num > 9)
  {
    num = num.toString().split("").reduce((x, y) => x * y)
    console.log(num)
    times += 1
  }
  return times
}

//5. Walk Through: I walked through the problem several times in order to figue it out. I added console.log
//in a lot of places to see my function in action

//6. Implement: I implemented it two ways as well implemented it using the browser.

//7. Tested it using the unit test at the bottom and go the answer to be true for the use cases. 

//To run the file, in the terminal run `node script-name`
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
