export const convertToCamelCase = str => {
  // TODO
  var wordArr = str.split(' ')
  for(var i = 0; i < wordArr.length; i++) {
    if (i == 0)
      wordArr[i] = wordArr[i].toLowerCase()
    else
      wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1).toLowerCase()
    }
  wordArr = wordArr.join('')
  return wordArr
}
