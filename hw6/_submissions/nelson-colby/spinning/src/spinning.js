export const spinWords = sentence => {
  let wordlist = []
  let newSentence = []
  if (sentence.split('').includes(' ')) {
    wordlist = sentence.split(' ')
  }
  else {
    wordlist.push(sentence)
  }
  for (let word of wordlist) {
    let newWord = word
    if (word.length >= 5) {
      newWord = word.split('').reverse().join('')
    }
    newSentence.push(newWord)
  }
  return newSentence.length > 0 ? newSentence.join(' ') : ''
}
