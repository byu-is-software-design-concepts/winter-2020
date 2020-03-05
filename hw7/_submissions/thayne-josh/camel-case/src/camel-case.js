export const convertToCamelCase = str => {
  for(let i = 0; i < str.length; i++) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
    { 
        return index == 0 ? word.toLowerCase() : word.toUpperCase(); 
    }).replace(/\s+/g, ''); 
  } 

}

