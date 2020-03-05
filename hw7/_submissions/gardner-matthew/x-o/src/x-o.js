export const isXAndOValid = str => {
  let xCount = 0;
  let oCount = 0;

  for (let char of str) {
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }

  if (xCount == oCount) {
    return true;
  } else {
    return false;
  }
};
