export const createMumble = str => {
  var mumble = str;
  var letter = '';
  var repeatedLetter = '';
  var repeatLetterCounter = 0;
  var result = '';
  var dash = '-';

  if(str != ''){
    for(let i = 0; i < mumble.length; i++) { 
      letter = mumble.charAt(i).toUpperCase(); // First letter is capitalized
      repeatedLetter = letter.repeat(repeatLetterCounter).toLowerCase(); // All following letters are lower case
      
      if (repeatLetterCounter != mumble.length - 1){
        result += letter + repeatedLetter + dash;  // Add a dash to all letter sets except the last one
      }
      else {
        result += letter + repeatedLetter;
      }
      repeatLetterCounter++; // Repeat the letter one more time than the previous letter set
    }
  }
  return result
}
