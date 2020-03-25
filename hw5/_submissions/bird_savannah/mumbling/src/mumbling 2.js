export const createMumble = str => {
  let arrStr = str.split("")
  let newString = ''
  let counter = 0
  for (let i = 0; i < arrStr.length; i++) {
    newString += str.charAt(i).toUpperCase()
    for ( let j = 0; counter > 0; j++) {
      newString += str.charAt(i).toLowerCase()
    }
    newString += '-'
    counter++
  }
  newString.substring(0, str.length - 1);
  return newString
}
