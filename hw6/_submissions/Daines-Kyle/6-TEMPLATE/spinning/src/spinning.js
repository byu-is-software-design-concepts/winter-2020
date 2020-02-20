export const spinWords = sentence => {
  let strArr = sentence.split(' ')
  for (let i = 0; i < strArr.length; ++i)
  {
    if (strArr[i].length < 5)
    {
      continue;
    }
    else
    {
      let newStr = ''
      for (let j = strArr[i].length - 1; j >= 0 ; --j)
      {
        newStr = newStr.concat(strArr[i].substr(j, 1))
      }
      strArr[i] = newStr
    }
  }
  let finalSentence = '' 
  for (let i = 0; i < strArr.length; ++i)
  {
    finalSentence = finalSentence.concat(strArr[i])
    if (i < strArr.length - 1)
    {
      finalSentence = finalSentence.concat(' ')
    }
  }
  return finalSentence
}
