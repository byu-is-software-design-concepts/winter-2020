export const convertToCamelCase = str => {
  let solution = "";
  str.split(" ").forEach((word, idx) => {
    idx === 0 ? (solution += word) : (solution += capFirstLetter(word));
  });
  return solution;
};

const capFirstLetter = word => {
  word = word.split("");
  word[0] = word[0].toUpperCase();
  word = word.join("");
  return word;
};
