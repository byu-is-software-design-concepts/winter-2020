export const convertToCamelCase = str => {
  // TODO
  let result = ''
  if (str === result){
    return result
  }
  str.split(' ').forEach((word, index) => {
    
      //word = word.replace(word[0], word[0].toUpperCase()) 
    word = word[0].toUpperCase() + word.slice(1).toLowerCase()
    result += word
  })
  result = result.replace(result[0], result[0].toLowerCase())
  return result
}
