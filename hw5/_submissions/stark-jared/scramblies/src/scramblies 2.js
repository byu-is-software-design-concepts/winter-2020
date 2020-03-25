//can string 2 be made out of the letters in string 1?

// it was unclear from the instructions and examples if letters from str1
// could be reused or not, so i assumed they could be. If they cant, i would
// simply add an else statement that removed the letter from the string with string.replace()
// then carry on as usual
export const scramble = (str1, str2) => {
  let output = true;
  str2 = [...str2];
  str2.every(x => {
    if (!str1.includes(x)) {
      output = false;
      return false;
    }
  });
  return output;
};
