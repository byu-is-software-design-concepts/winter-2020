# Scramblies

## Setup

Copy this folder and paste it under `_submissions/lastname-firstname`.

Now in the new directory, run `npm install` in order to install the required packages.

The code is located in the `src` folder.

Run `npm run test` to verify if tests are passing or not. Remember, you have to be in the directory for this command to work.

## Instructions

Complete the function `scramble(str1, str2)` that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

- For example:
  - `scramble('wrold', 'world') === true`
  - `scramble('rkqodlw', 'world') === true`
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
