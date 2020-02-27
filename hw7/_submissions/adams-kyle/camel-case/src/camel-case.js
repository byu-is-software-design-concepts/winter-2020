export const convertToCamelCase = str => {
  str.toLowerCase();
  let modifiedStr = str.split(' ');

  for (let i = 0; i < modifiedStr.length; i++) {
    if (i > 0) {
      modifiedStr[i] = modifiedStr[i].charAt(0).toUpperCase() + modifiedStr[i].substring(1);
    } 
  }

  let camelString = modifiedStr.join('');

  return camelString;
}
