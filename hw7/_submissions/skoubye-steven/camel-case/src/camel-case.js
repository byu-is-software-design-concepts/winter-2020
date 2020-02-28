export const convertToCamelCase = str => {
  let strArray = str.split(" ")
  let newString = ""
  for (let i = 0; i < strArray.length; i++) {
    if (i == 0) {
      newString = strArray[i]
    }
    else {
      let Upper = strArray[i].split("")
      Upper[0] = Upper[0].toUpperCase()
      Upper = Upper.join("")
      newString = newString + Upper
    }
  }
  return newString
}
