export const getFibNumber = steps => {
  let b = 0
  let a = 1
  let temp
  while (steps > 0) {
      temp = a
      a = a + b
      b = temp
      steps--
  }
return b
}