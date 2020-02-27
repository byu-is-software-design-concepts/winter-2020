export const spinWords = sentence => {
  let arrWords = []
  arrWords = sentence.split(' ')

  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > 4) {
      let temp = []
      temp = arrWords[i]
      temp.reverse()
      let newString = temp.join()
      arrWords[i] = newString
    }
  }

  let finalString = arrWords.join(' ')
  return finalString
}
