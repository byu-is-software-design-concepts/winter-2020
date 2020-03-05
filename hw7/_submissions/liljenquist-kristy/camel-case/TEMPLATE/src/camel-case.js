export const convertToCamelCase = str => {
  // Write the function `convertToCamelCase(str)`. All words must have their first letter capitalized without spaces.

  //turn str into an array
  var str = str.split(' ');
  var camelCase = [];
    
  for(var x = 0; x < str.length; x++){
    //for the first word, don't capitalize the first letter
    if (x == 0) {
      camelCase.push(str[x]); 
    } 
    //for the words that come after capitilize the first letter
    else {
      camelCase.push(str[x].charAt(0).toUpperCase() + str[x].slice(1));
    }
  }
  
  return camelCase.join('');

}
