export const convertToCamelCase = str => {
  var input = str.split(""); // Convert input string into an array
  var inputArr = [];
  var result = "";

  if(str == ""){ // If input string is empty
    result = "Please enter words to be converted to camelCase";
  }

  else if (!/\s/.test(str)) { // If input string is only one word, has no spaces
    result = "Please enter more than one word to be converted to camelCase";
  }

  else { // Input string can be camelCased
    for(let i = 0 ; i < input.length; i++) {
      if(input[i] == " "){
        input[i + 1].replace(input[i + 1].toUpperCase());
        inputArr.push(input[i + 1].toUpperCase());
        i++;
      }
      else{
        inputArr.push(input[i]);
      }
      result = inputArr.join(""); // Convert array back into a string
    }
  }

  return result  
}
  