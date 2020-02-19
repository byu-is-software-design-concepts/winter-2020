export const spinWords = sentence => {
  sentence = sentence.split(' ');
  let tempWord = []
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i].length >= 5){
      tempWord = sentence[i].split('');
      tempWord = tempWord.reverse();
      tempWord = tempWord.join("")
      sentence[i] = tempWord;
    }
  }
  sentence = sentence.join(" ");
  return sentence
}

