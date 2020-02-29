export const convertToCamelCase = str => {
  let strArray = str.split(" ");
  let result = "";

  for (let i = 0; i < strArray.length; i++) {
    if (i === 0) {
      result += strArray[i].toLowerCase();
    }
    else {
      result += strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1).toLowerCase();
    }
  }
  return result;
}
