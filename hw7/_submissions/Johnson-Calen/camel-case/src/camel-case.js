export const convertToCamelCase = str => {
  let returnStr = ''
  str = str.toLowerCase().split(' ')
    for (var i=0; i < str.length; i++) {
      if (i===0) {
        returnStr += str[i]
      } else {
      returnStr +=str[i].charAt(0).toUpperCase() + str[i].substring(1)
      }
    }
  return returnStr
}