export const scramble = (str1, str2) => {
  // TODO
  const strArray = str2.split("")
  let result = true

  for(let iCount = 0; iCount < strArray.length; iCount++) {
    if(str1.includes(strArray[iCount])) {
    
    } else {
      result = false
      break
    }
  }


  return result
}
