export const scramble = (str1, str2) => {

  for (let index = 0; index < str2.length; index++) {
    
    if (!str1.includes(str2[index])){
      return false
    }
    
  }
  return true
}


// Complete the function `scramble(str1, str2)` that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// - For example:
//   - `scramble('rkqodlw', 'world') === true`
// - Only lower case letters will be used (a-z). No punctuation or digits will be included.