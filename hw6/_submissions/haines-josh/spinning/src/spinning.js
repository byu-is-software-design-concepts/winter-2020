export const spinWords = sentence => {
  // TODO
  var original = sentence.split(' ')
  var spun = []
  var word = ''

  for (let i = 0; i <= original.length; i++){
    word = original[i]
    if (undefined !== word && word.length > 4){
      word = word.split("").reverse().join("")
    }
    spun.push(word)
    
  }
  return spun.join(' ')
}
