export const isXAndOValid = str => {
  let xCount = 0
  let oCount = 0
  str = str.toLowerCase()

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
      oCount += 1
    } else if (str[i] === 'x') {
      xCount += 1
    }
  }

  if (xCount === oCount) {
    return true
  }
  else {
    return false
  }
}
