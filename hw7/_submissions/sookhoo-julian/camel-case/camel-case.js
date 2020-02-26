export const convertToCamelCase = str => {
  // array of words from string
  let aWord = str.split(' ');

  // change to camel case
  for (let i = 1; i < aWord.length; i++){
    aWord[i] = aWord[i].charAt(0).toUpperCase() + aWord[i].slice(1);
  }

  // join array back together
  str = aWord.join('');

  return str
}
