export const scramble = (str1, str2) => {

  let str1Array = str1.split('')
  
  let Characters = true
  
  
  for (let i = 0; i < str2.length; i++) {
    Characters = str1Array.includes(str2[i])
    if (Characters === true) {
      let index = str1Array.indexOf(str2[i])
      str1Array.splice(index,1)
    }
    else {
      return false
    }
  }
  
  return Characters
}
