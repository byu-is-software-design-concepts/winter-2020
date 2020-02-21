export const convertToCamelCase = str => {
  // TODO
  let words = str.split(" ");
  str = words[0];
  for (var i = 1; i < words.length; i++) {    
    str += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return str;
}
