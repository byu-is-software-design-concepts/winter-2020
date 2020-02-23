export const scramble = (str1, str2) => {
  let s1 = str1;
  let s2 = str2;
  let stringsMatch = false;
  let matchingLetters = 0;

  if(str1 = '' || str2 == '') {
    stringsMatch = true;
  }

  for(let i = 0; i < s2.length; i++){ // Loop through str2 for comparions to str1
    // Find and compare letters in str2 to letters in str1
    if(s1.includes(s2.charAt(i)) == true){
      matchingLetters++; // If the letters match, increment number of matching letters found
    };

    // If the letterMatchCounter is >= length of str2 then we have a match
    stringsMatch = (matchingLetters >= s2.length) ? true : false;
  }

  return stringsMatch
}