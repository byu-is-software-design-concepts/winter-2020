# Persistence


This assignment is to help you practice. Pretend we're doing a coding interview via email (bear with me here) 
and you need to show me how you would work out the solution for this problem. Use comments and potentially 
multiple iterations to markup your code with what you'd tell your interview. Try to use the concepts we talked 
about in class to approach the problem.

## Technical Interview Problem Steps

1. Listen
2. Draw an example
3. State a brute force
4. Optimize
5. Walk through
6. Implement
7. Test
8. Don’t give up!!! (I put some solutions in my submissions folder `clark-branden` if you need any hints a right direction.)

## Interview Prompt


Write a function, persistence, that takes in a positive parameter `num` and returns its 
multiplicative persistence, which is the number of times you must multiply the digits 
in `num` until you reach a single digit.

For example:

``` javascript
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 ```
