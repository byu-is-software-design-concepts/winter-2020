export const convertToCamelCase = str => {
  let finalStr = ''
  str = str.toLowerCase().split(' ')
    for (var i=0; i < str.length; i++) {
      if (i===0) {
        finalStr += str[i]
      } else {
      finalStr +=str[i].charAt(0).toUpperCase() + str[i].substring(1)
      }
    }
  return finalStr
}
