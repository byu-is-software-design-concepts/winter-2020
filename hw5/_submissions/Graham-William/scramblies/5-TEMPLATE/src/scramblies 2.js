export const scramble = (str1, str2) => {
  // TODO
  str2Array = str2.split('')
  str1Array = str1.split('')

  for(let i=0; i<str2.length; i++) {
    if(!str1Array.includes(str2Array[i])) {
      return false
    }

  }
return true
}
