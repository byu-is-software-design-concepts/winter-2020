export const isXAndOValid = str => {
  let xCount = str.split('x').length-1
  let oCount = str.split('o').length-1
  if (oCount == xCount) {
    return true
  }
  return false
}
