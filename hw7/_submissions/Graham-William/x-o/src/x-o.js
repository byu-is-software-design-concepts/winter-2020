const isXAndOValid = str => {
  // TODO
  xCount = 0;
  oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'x') {
      xCount++
    }
    else if (str.charAt(i) == 'o') {
      oCount++
    }
    else {
      break;
    }
  }
    if (oCount == xCount) {
      return true
    }
    else {
      return false
    }
  
}

