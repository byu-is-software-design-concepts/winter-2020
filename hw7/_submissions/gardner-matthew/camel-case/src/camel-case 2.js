export const convertToCamelCase = str => {
  let arrWords = str.toLowerCase().split(" ");

  for (let i = 0; i < arrWords.length; i++) {
    if (i > 0) {
      arrWords[i] =
        arrWords[i].charAt(0).toUpperCase() + arrWords[i].substring(1);
    }
  }

  str = arrWords.join("");

  return str;
};
