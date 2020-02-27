export const convertToCamelCase = str => {
  let words = str.split(' ')
  let newWords = []

  newWords.push(words[0])

  for (let i = 1; i < words.length; i++) {
    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }

  let result = newWords.join('')
  return result
}
