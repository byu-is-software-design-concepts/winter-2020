export const spinWords = sentence => {

  //create an array
  sentence = sentence.split(" ")
  
  //reverse words that are longer than 4 characters
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i].length > 4) {
      sentence[i] = sentence[i].split("").reverse()
      sentence[i] = sentence[i].join("")
    }
  }

  sentence = sentence.join(" ")

  return sentence
}
