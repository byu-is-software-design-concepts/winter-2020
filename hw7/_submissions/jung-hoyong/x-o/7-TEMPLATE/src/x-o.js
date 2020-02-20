export const isXAndOValid = str => {
  let oCount = 0
  let xCount = 0
  str = str.toUpperCase()

  for (let i = 0; i < str.length; i++) {
    if (str[i]=='O') {
      oCount++
    }
    if (str[i]=='X') {
      xCount++
    }
  }
  return oCount == xCount
}

