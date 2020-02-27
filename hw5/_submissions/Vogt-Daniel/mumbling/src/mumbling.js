export const createMumble = str => {
  

  let finalString = ""

  // if (str != ""){
  //   for (let i = 0; i < str.length; i++){
  //     for (let j = 0; j < str.indexOf[str[i]]; j++) {
  //       finalString += str[i]
  //     }    
  //   } 
  // }
  // else {
  // }

  if (str != ""){
    for (let i = 0; i < str.length; i++){


         // first letter capital
         finalString += str[i].toUpperCase()

         // other characters match the indexOf and sent to lower case
          for (let j = 0; j <= (str.indexOf(str[i])-1); j++){
            finalString += str[i].toLowerCase()
          }

          // put hyphen
          finalString += "-"
    }

    // remove last hyphen
    finalString = finalString.substring(0, finalString.length - 1);
  }
  else {
  }

  return finalString
}
