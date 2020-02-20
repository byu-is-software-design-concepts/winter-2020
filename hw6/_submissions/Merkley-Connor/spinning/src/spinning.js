export const spinWords = sentence => {
  
  // I couldn't figure this one entirely out when it came to reforming the sentance after spinning the words. 

  let words = sentence.split(" ");
  let iCount = 0;

  for (let w of words) {
      let letterCount = w.split("");
      if (letterCount.length >= 5) {
          letterCount = letterCount.reverse();
      }
      words[iCount] = letterCount.join("")
      iCount++
  }

  sentence = words.join(" ");

return sentence
}