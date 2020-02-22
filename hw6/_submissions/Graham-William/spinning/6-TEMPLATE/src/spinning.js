export const spinWords = sentence => {
  let wordArray = sentence.split(" ");
  let i = 0;

  for (let w of wordArray) {
      let numLetters = w.split("");
      if (numLetters.length >= 5) {
          numLetters = numLetters.reverse();
      }
      wordArray[i] = numLetters.join("")
      i++
  }

  sentence = wordArray.join(" ");
  return sentence
}
