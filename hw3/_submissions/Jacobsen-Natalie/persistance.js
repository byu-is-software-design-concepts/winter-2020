    // Natalie Jacobsen

    //My first initial thought was to use a while loop to keep multiplying the numbers until it got down to one number/character long. I also knew that I'd have to keep a counter of how many times this multiplication happened.

    //To start, I wanted to ensure that the number wasn't already one character and that it was positive, so the calculation will only run if the number is 10 or greater. If it isn't, 0 is returned.

    //I then set my while loop with a random condition that would change and end the loop when the number reached one character in length.

    //My thought process was that I needed to figure out the length of the number so that I could access each of the individual numbers in the whole number. There would be no way of me knowing if the number inputted into the function was 2 characters or 10 characters (etc.), so I gathered the length so that I would be able to then access each of those numbers using a for loop and an incremental counter that would end when it reached the length of the number.

    //I used the for loop to go through each individual number of the bigger number and multiplied it by the previous multiplication. I set an initial number titled mult to 1 that I multiplied the first number by. From there, mult became mult multiplied by the next number in the initial number. 

    //After all multiplication calculations had been completed, I added 1 to my counter of how many times I'd have to calculate multiplications until I got down to one character. I then set the multplied number to replace num. I then checked the length of the number. If it was down to 1 character in length, the loop ended. If not, another loop through the while loop occurs until the number does reach 1 character in length.

    //Each time the while loop is ran, 1 is added to my 'times' counter, and that is the number that is returned because that is the number of times that you must multiply the digits in the number until a single number is reached.

function persistence(num) {
    // TODO: Calculate "persistence"
    let times = 0;

    //if the number inputted is 10 or greater, continue with the while loop.
    if (num >= 10)
    {
        let x = 0;
        while (x == 0) {
            num = num.toString();
            //calculate the length of the number
            let len = num.length;
            let mult = 1;
            //complete the for loop while i is less than the original number's length
            for (i = 0; i < len; i++)
            {
                //multiply the number in each position * the previously calculated multiplication
                mult = mult * parseInt(num[i])
            }

            //add 1 to the variable to count how many times you have to multiply all the digits in the number to get down to 1
            times += 1;
            //set the calculated multiplication to replace the original number
            num = mult;
            //if the number has a length of 1 now, end the loop
            if (num.toString().length == 1)
            {
                x = 1;
            }
        }
    }
    //return the number of times that the numbers were multiplied
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
