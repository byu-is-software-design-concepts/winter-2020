export const isXAndOValid = str => {
  let xNum = 0
  let oNum = 0
  str = str.toLowerCase()

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
      oNum += 1
    } else if (str[i] === 'x') {
      xNum += 1
    }
  }

  if (xNum === oNum) {
    return true
  }
  else {
    return false
  }
}