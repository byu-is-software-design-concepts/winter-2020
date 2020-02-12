export const scramble = (str1, str2) => {
// function scramble(str1, str2){
  let same = true;

  for(let count = 0; str2.length > count; count++) 
  {
    if(str1.indexOf(str2[count]) > -1)
    {
      str1 = str1.replace(str2[count], '');
    }
    else
    {
      same = false;
    }

  }
  return same
}
// console.log(scramble('pr', 'world'))
// Complete the function `scramble(str1, str2)` that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// - For example:
//   - `scramble('rkqodlw', 'world') === true`
// - Only lower case letters will be used (a-z). No punctuation or digits will be included.