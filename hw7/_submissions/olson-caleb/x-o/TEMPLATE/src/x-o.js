export const isXAndOValid = str => {
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      xCount ++;
    }
    else if (str[i] == 'o') {
      oCount ++;
    }
  }
//  console.log(xCount, oCount)
  return (xCount == oCount)
}
