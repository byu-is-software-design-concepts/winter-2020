export const convertToCamelCase = str => {
  let strArray = str.split(' ')
  let subArray = [];
  for(var i=1; i<strArray.length; i++){
    subArray = strArray[i].split('');
    subArray[0] = subArray[0].toUpperCase();
    strArray[i] = subArray.join('')
  }
  return strArray.join('')
}

