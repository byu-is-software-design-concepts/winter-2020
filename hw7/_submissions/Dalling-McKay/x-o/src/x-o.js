export const isXAndOValid = str => {
  let xCnt = 0
  let oCnt = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'x' || str.charAt(i) == 'X') {
      xCnt++
    }
    if (str.charAt(i) == 'o' || str.charAt(i) == 'O') {
      oCnt++
    }
  }
  if (xCnt == oCnt) {
    return true
  }
  return false
}
