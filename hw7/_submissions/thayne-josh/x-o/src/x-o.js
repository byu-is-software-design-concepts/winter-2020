export const isXAndOValid = str => {
  let xCount = str.split('x').length
  let oCount = str.split('o').length
  if (oCount == xCount) {
    return true
  }
  return false
}
