export const isXAndOValid = str => {
  let sentance = str.split(' ');
  let xCount = 0;
  let oCount = 0;
  const X = "x";
  const O = "o";

  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i].toLowerCase() === X){
      xCount++;
    }
    else if (sentance[i].toLowerCase() === O) {
      oCount++;
    }
  }

  return (xCount === oCount ? true : false);
}
