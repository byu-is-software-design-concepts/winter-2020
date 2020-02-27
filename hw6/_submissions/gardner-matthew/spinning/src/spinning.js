export const spinWords = sentence => {
  let arrWords = sentence.split(' ')

  for (let iCount = 0; iCount < arrWords.length; iCount++) {
    if (arrWords[iCount].length >= 5) {
      let arrLetters = arrWords[iCount].split('')
      let arrReverse = []
      let arrLength = arrLetters.length

      for (let iCount2 = 0; iCount2 < arrLength; iCount2++) {
        let letter = arrLetters.pop()
        arrReverse.push(letter)
      }

      let wordReverse = arrReverse.join('')
      arrWords.splice(iCount, 1, wordReverse)
    }
  }

  let newSentence = arrWords.join(' ')
  return newSentence
}
