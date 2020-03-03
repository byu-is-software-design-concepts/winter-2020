export const convertToCamelCase = str => {
  // TODO
  let wordsToConcatenate = str.split(" ")

  wordsToConcatenate[0] = wordsToConcatenate[0].toLowerCase()

  for (let i = 1; i < wordsToConcatenate.length; i++) {
    wordsToConcatenate[i] =  wordsToConcatenate[i].toLowerCase()
    let wordToChange = wordsToConcatenate[i].split('')
    wordToChange[0] = wordToChange[0].toUpperCase()
    wordsToConcatenate.splice(i,1,wordToChange.join(''))
  }

  return wordsToConcatenate.join('')
}
