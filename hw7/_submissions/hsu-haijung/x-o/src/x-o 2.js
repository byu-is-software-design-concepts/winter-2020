export const isXAndOValid = str => {
  // TODO
  var xCount = 0
  var oCount = 0
  for (var i = 0; i < str.length; i ++) {
    if (str.charAt(i) == 'x')
      xCount ++
    else if (str.charAt(i) == 'o')
      oCount ++
  }
  return xCount == oCount
}
