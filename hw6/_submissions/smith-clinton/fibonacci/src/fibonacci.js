export const getFibNumber = steps => {
  let num1 = 0
  let num2 = 1
  let num3
  for (var i = 0; i < steps; i++) {
    num3 = num1 + num2
    num1 = num2
    num2 = num3
  }
  return num1
}
