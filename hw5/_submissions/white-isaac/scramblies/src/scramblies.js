export const scramble = (str1, str2) => {
  let allCharsMatched = true;

  let s1Array = str1.split("");
  let s2Array = str2.split("");

  for (let item of s2Array) {
    let indexFound = s1Array.indexOf(item);
    if (indexFound < 0) {
      allCharsMatched = false;
      break;
    } else {
      s1Array.splice(indexFound, 1);
    }
  }

  return allCharsMatched;
}
