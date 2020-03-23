export const spinWords = sentence => {
  if (sentence === undefined || sentence.length === 0) throw new Error("Input a valid string and I'll spin your words"); 
  
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = spinWordsR(words[i]);
    } 
  }
  return words.join(' ');
}

const spinWordsR = sentence => {
  return sentence.length === 1 ? sentence : spinWordsR(sentence.slice(1)) + sentence.charAt(0);
}
