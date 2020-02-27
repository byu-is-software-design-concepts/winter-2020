export const spinWords = sentence => {
  let sentenceArray = sentence.split(" ")

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > 4) {
      sentenceArray[i] = sentenceArray[i].split("").reverse().join("")
    }
  }

  return sentenceArray.join(" ")
}
