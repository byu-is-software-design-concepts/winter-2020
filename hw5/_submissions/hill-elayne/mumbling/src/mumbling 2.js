export const createMumble = str => {
  let finalString = ""

  if (str != ""){
    for (let i = 0; i < str.length; i++){
         // capitalize first letter
         finalString += str[i].toUpperCase()
         // other characters lower case
          for (let j = 0; j <= (str.indexOf(str[i])-1); j++){
            finalString += str[i].toLowerCase()
          }
          // hyphen between sets
          finalString += "-"
    }

    // remove last hyphen
    finalString = finalString.substring(0, finalString.length - 1);
  }
  else {
  }

  return finalString
}