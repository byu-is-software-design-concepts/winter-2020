export const isXAndOValid = str => {
  var numX = 0, numO = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "x" || str.charAt(i) == "X") {
      numX++;
    }
    if (str.charAt(i) == "o" || str.charAt(i) == "O") {
      numO++;
    }
  }
  if (numX == numO) {
    return true;
  }
  else {
    return false;
  }
}