
export const spinWords = sentence => {
  let words = sentence.split(" ")
  let iCount = 0

  for (let word of words) {
    let letters = word.split("");
    if (letters.length >= 5) {
        letters = letters.reverse();
    }
    words[iCount] = letters.join("")
    iCount++
}

sentence = words.join(" ");

  return sentence
}

