export const isXAndOValid = str => {
  // TODO
  let xoSentence = [];
  let xCount = 0;
  let oCount = 0;

  xoSentence = str.toLowerCase().split("");
  console.log(xoSentence);

  for (let counter = 0; counter < xoSentence.length; counter++) {
    if (xoSentence[counter] == "x") {
      xCount++;
    }
    if (xoSentence[counter] == "o") {
      oCount++;
    }
  }

  if (xCount == oCount) {
    return true;
  } else {
    return false;
  }
};
