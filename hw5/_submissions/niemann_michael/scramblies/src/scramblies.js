export const scramble = (str1, str2) => {
    let scrambleMatch = true;
    for (let i = 0; str2.length > i; i++) {
      if (str1.indexOf(str2[i]) > -1) {
        str1 = str1.replace(str2[i], '');
      }  
      else {
        scrambleMatch = false;
      }
    }
    return scrambleMatch;
}