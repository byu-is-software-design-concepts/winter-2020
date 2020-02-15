export const uniqueInOrder = str => {
  let arr = [];
  let aTemp = str.split("");
  let i = 0;

  function checkLetter(letter) {
    return letter === aTemp[i];
  }

  if (str != "") {
    for (i = 0; i < aTemp.length; i++) {
      let result = arr.findIndex(checkLetter);
      if (result < 0) {
        arr.push(aTemp[i]);
      }
    }
  }

  return arr;
};
