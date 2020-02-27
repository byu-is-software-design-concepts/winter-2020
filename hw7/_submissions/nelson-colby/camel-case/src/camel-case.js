export const convertToCamelCase = str => {
  let returnString = ''
  let words = str.split(' ')
  let firstWord = true

  for (let word of words) {
    if (firstWord) {
      firstWord = false
      returnString += word
    }
    else {
      returnString += (word.charAt(0).toUpperCase() + word.slice(1))
    }
  }

  return returnString
}
