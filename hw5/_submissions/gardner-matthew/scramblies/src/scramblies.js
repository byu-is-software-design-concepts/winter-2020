export const scramble = (str1, str2) => {
  if (str1.length < str2.length) {
    return false;
  } else if (str1 === "" && str2 === "") {
    return true;
  } else {
    let arrStr2 = str2.split("");
    let arrStr1 = str1.split("");

    for (let iCount = 0; iCount < arrStr2.length; iCount++) {
      let iIndex = arrStr1.indexOf(arrStr2[iCount]);

      if (iIndex < 0) {
        return false;
      } else {
        arrStr1.splice(iCount, 1);
      }
    }

    return true;
  }
};

// I can split str2 into an array of characters
// Then, I can go through the first array and check
// if it has the first character of str2.I

// if it doesn't, then return false. If it does, then
// pop that character off and check for the second
// letter of str2.

// if able to go through all of the letters of str2
// then return true.
