export const spinWords = sentence => {
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
