export const convertToCamelCase = str => {
  let returnString = "";
  let stringArray = str.split(" ");

  for(let i=0; i<stringArray.length; i += 1) {
    if (i != 0) {
      returnString += stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
    } else {
      returnString += stringArray[i];
    }
  }

  return returnString
}
