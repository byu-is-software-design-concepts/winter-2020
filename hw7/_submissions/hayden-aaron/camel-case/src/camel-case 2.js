export const convertToCamelCase = str => {
  let words = str.split(' ')
  let newWords = []
  for (let i = 0; i < words.length; i++)
  {
    if(i != 0)
    {
      let word = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      newWords.push(word)
    }
    else
    {
      let firstWord = newWords.push(words[i])
    }
  }
  let answer = newWords.join('')
  return answer
}
