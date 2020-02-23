export const isXAndOValid = str => {
  var arr = str.split('');

  var xCount = 0;
  var oCount = 0;

  for (var letter of arr){
    if (letter.toLowerCase() === 'x'){
      xCount += 1;
    } else if (letter.toLowerCase() === 'o') {
      oCount += 1;
    }
  }

  if (xCount === oCount){
    return true;
  } else {
    return false;
  }
}
