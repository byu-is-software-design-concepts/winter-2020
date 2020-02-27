export const spinWords = sentence => {
  let arr1 = sentence.split(" ")
  for(let i = 0; i < arr1.length; i++)
  {
    if(arr1[i].length >= 5)
    {
      let letters = arr1[i].split("")
      letters = letters.reverse()
      let reverseWord = letters.join('')
      arr1[i] = reverseWord
    }
  }
  let newSentence = arr1.join(' ')
  return newSentence
}
