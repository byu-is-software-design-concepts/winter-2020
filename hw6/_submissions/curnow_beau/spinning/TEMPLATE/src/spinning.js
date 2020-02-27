export const spinWords = sentence => {
  let words = sentence.split(" ");
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4){
    words[i] = words[i].split("").reverse().join("");
    }
  }
  sentence = words.join(" ")
  console.log(sentence)
  return sentence
}
