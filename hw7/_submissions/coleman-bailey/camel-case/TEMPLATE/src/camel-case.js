export const convertToCamelCase = str => {
  // TODO
  let words = [];
  let counter = 0;
  let camelCase = "";

  words = str.split(" ");

  for (counter; counter < words.length; counter++) {
    if (counter != 0) {
      camelCase = words[counter];
      camelCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
      words[counter] = camelCase;
    }
  }

  return words.join("");
};

console.log(convertToCamelCase("this should be camel case"));