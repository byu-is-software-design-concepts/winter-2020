export const spinWords = sentence => {
  let words = sentence.split(" ")
  let sentenceArr = []

  for (const word of words)
  {
    let newWord = ""
    if (word.length >= 5)
    {
      newWord = word.split("").reverse().join("")
      console.log(newWord)
    }
    else
    {
      newWord = word
    }
    sentenceArr.push(newWord)
  }

   sentence = sentenceArr.join(" ")

  return sentence
}