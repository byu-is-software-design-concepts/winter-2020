export const convertToCamelCase = str => {

  // create array of words
  let wordArray = str.split(' ')

  // change to camel case
  for (let i = 1; i < wordArray.length; i++){
    wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
  }

  // join array back together
  str = wordArray.join('')


  return str
}
