export const scramble = (str1, str2) => {
  var firstString = str1;
  var secondString = str2;
  var stringsMatch = false;
  var letterMatchFoundCounter = 0;

  if(str1 = '' || str2 == '') {
    stringsMatch = true;
  }
  
  for(let i = 0; i < secondString.length; i++){ // Loop through str2 for comparions to str1
    // Find and compare letters in str2 to letters in str1
    if(firstString.includes(secondString.charAt(i)) == true){
      letterMatchFoundCounter++; // If the letters match, increment letterMatchCounter
    };

    // If the letterMatchCounter is the >= length as str2 
    // (meaning a portion of str1 can be rearragned to match str2)
    stringsMatch = (letterMatchFoundCounter >= secondString.length) ? true : false;
  }

  return stringsMatch
}
