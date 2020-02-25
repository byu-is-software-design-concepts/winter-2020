export const createMumble = str => {
  let returnStr = "";
  let strArray = [];
  strArray = str.slice("");

  for (let i = 0; i < strArray.length; i += 1) {
    if (i > 0) {
      returnStr += "-";
    }
    returnStr += `${strArray[i].toUpperCase()}${strArray[i].toLowerCase().repeat(i)}`;
  }

  return returnStr;
}
