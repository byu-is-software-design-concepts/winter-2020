export const spinWords = sentence => {
  var result = sentence;
  var reversedWord = "";
  var wordsArry = sentence.split(" ");

  for(let i = 0; i < wordsArry.length; i++){
    if(wordsArry[i].length >= 5) { // Only spin words with 5 or more letters
      reversedWord = wordsArry[i].split("").reverse().join("");
      wordsArry[i] = reversedWord; // Replace reversed word with original word
    }

    result = wordsArry.join(" ");
  }

  return result
}
