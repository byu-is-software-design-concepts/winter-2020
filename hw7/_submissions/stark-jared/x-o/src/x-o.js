export const isXAndOValid = str => {
  const letters = [...str];
  let xCount = 0;
  let oCount = 0;
  letters.forEach(letter => {
    letter.toLowerCase() === "x" && xCount++;
    letter.toLowerCase() === "o" && oCount++;
  });
  return xCount === oCount;
};
