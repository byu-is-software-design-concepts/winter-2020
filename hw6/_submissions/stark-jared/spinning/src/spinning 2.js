export const spinWords = sentence => {
  let arr = sentence.split(" ");
  console.log("arr");
  arr = arr.map(word => {
    if (word.length >= 5) {
      return word
        .split("")
        .reverse()
        .join("");
    }
    return word;
  });

  return arr.join(" ");
};
