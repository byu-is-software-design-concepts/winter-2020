export const scramble = (str1, str2) => {
  
  let word = '';

  for (let i = 0; i < str2.length; i++) {
    const letter = str2.charAt(i);
    
    for (let j = 0; j < str1.length; j++) {
      const compare = str1.charAt(j);
      if (letter == compare) {
        word += compare;
      }
    }
    if (word == str2) {
      return true
    } 
  }
  return false
}
