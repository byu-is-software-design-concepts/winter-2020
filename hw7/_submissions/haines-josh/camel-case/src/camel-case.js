export const convertToCamelCase = str => {
  // TODO
  var original = str.split(' ')
  var word = ''
  var camel = []
  var wordCount = original.length

  camel[0] = original[0]

  for(let i = 1; i < wordCount; i++){
    word = original[i]
    word = word[0].toUpperCase() + word.slice(1)
    camel.push(word)
  }
  

  return camel.join('')
}
