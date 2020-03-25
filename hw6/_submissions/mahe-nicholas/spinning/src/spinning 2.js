export const spinWords = sentence => {
  // TODO
  let words = sentence.split(' ')
  let result = ''
  let counter = 0
  words.forEach((word) => {
    counter++
    if (word.length > 4){
      word = word.split('').reverse().join('')
      result = result.concat(word)
      if (counter <= words.length-1){
        result += ' '
      }
    }
    else{
      result += word
      if (counter <= words.length-1){
        result += ' '
      }
    }
  })
  return result
}
