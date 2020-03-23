export const scramble = (str1, str2) => {
  let origLen = str1.length;

  for(let o = 0; o < str2.length; o++) {
      for (let i = 0; i < str1.length; i++ ) {
          
          // remove the letter from str1 each time 
          //we find a matching letter between the two strings
          if (str2[o] === str1[i]) {
            str1 = str1.slice(0,i) + str1.slice(i+1);
            break;
          } 
      }
  }

  // if the new length of str1 + length of str2 equal the original length of str1, we're good.
  return (parseInt(str1.length) + parseInt(str2.length)) === origLen;
}
