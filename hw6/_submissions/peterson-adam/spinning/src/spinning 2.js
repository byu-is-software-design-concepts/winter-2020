export const spinWords = sentence => {
  let wordArray = sentence.split(" ");
  for(let i = 0; wordArray.length > i; i++)
  {
    if(wordArray[i].length >= 5)
    {
      wordArray[i] = wordArray[i].split("").reverse().join("");
    }
  }
  let outputSentance = wordArray.join(" ");
  return outputSentance
}
