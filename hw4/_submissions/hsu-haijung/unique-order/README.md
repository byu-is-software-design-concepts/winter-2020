# Unique Order

## Setup

We're now going to use Jest for the tests in our homeworks.

Copy this folder, `unique-order`, and paste it under `_submissions/lastname-firstname`.

Now in the new directory, run `npm install` in order to install the required packages.

The code is located in the `src` folder.

Run `npm run test` to verify if tests are passing or not. Remember, you have to be in the directory for this command to work.

## Instructions

Implement the function `uniqueInOrder` which takes as one argument a string of letters and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

- For example:
  - `"AAAABBBCCDAABBBL"` should return `["A","B","C","D","A","B", "L"]`
