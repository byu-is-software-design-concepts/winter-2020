export const spinWords = sentence => {
  let words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('')
    }
  }

  sentence = words.join(' ')

  return sentence
}
