export const spinWords = sentence => {
  let splitSentence = sentence.split(" ")
  let spun = ''
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].length >= 5) {
      let spinning = ""
      for(let x = splitSentence[i].length; x >= 0; x--) {
        spinning += splitSentence[i].charAt(x)
      }
      spun += spinning
    }
    else {
      spun += splitSentence[i]
    }
    spun += " "
  }
  spun = spun.slice(0, -1)
  return spun  

}
