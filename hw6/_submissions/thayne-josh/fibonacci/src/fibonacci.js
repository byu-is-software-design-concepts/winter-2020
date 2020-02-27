export const getFibNumber = steps => {
  let old = 0
  let curr = 1
  let temp
  let num
  while (steps > 0) {
      temp = curr
      curr += old
      old = temp
      steps--

  }
num = old
return num
}
