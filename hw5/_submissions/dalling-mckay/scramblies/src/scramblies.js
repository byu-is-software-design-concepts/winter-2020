export const scramble = (str1, str2) => {
  let isMatch = true;

  for (let i = 0; str2.length > i; i++) {
    if (str1.indexOf(str2[i]) >= 0) {
      str1 = str1.replace(str2[i], '');
    }
    else {
      isMatch = false;
    }

  }
  return isMatch
}
