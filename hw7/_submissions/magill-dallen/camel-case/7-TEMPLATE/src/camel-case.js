export const convertToCamelCase = str => {
  let splitStr = str.split(" ");
  let output = "";

  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0) {
      output += splitStr[i].toLowerCase();
    }
    else {
      output += splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1).toLowerCase();
    }
  }
  return output;
}

// Write the function `convertToCamelCase(str)`. All words must have their first letter capitalized without spaces.

// - For example
//   - `hello case` should return `helloCase`
//   - `my camel case word` should return `myCamelCaseWord`