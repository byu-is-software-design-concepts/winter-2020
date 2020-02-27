export const spinWords = sentence => {
  // TODO
  let sentenceSplit = sentence.split(" ")
  let outputStr = ""
  for (let i = 0; i < sentenceSplit.length; i++){
    if (sentenceSplit[i].length >= 5)
      sentenceSplit[i] = reverseStr(sentenceSplit[i])
    if (i == 0)
      outputStr = sentenceSplit[i]
    else 
      outputStr += " " + sentenceSplit[i]
  }
  return outputStr
}

function reverseStr(inputStr) {
  let tempArr = inputStr.split("")
  tempArr = tempArr.reverse()
  return tempArr.join("")
}