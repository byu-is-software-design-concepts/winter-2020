export const scramble = (str1, str2) => {
  //Get array of all letters in both strings
  let str1Array = str1.split('')

  //Declare boolean for if a letter cannot be found
  let foundCharacters = true
  //Loop through elements in str2 and see if they can be found in string 1
  for (let i = 0; i < str2.length; i++) {
    foundCharacters = str1Array.includes(str2[i])
    if (foundCharacters === true) {
      let index = str1Array.indexOf(str2[i])
      str1Array.splice(index,1)
    }
    else {
      return false
    }
  }

  return true
}
