export const getFibNumber = steps => {
  if (steps === 0) {
    return 0
  }
  let firstNum = 0
  let secNum = 1
  let newNum = 0

  for (let i = 0; i < steps - 1; i++) {
    newNum = firstNum + secNum
    firstNum = secNum
    secNum = newNum
  }
  return newNum
}
