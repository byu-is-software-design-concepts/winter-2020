export const createMumble = str => {

  let counter = 0
  let newString = ''

  for (let i = 0; i < str.length; i++) {
    newString = newString + str.charAt(i).toUpperCase()
    for (let j = 0; j < counter; j++) {
      newString = newString + str.charAt(i).toLowerCase()      
    }
    counter = counter + 1
    if(counter != str.length) {
      newString = newString + "-"
    }
  }
  return newString
}
