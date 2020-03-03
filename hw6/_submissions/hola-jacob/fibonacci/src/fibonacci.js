export const getFibNumber = steps => {
  let x = 0
  let y = 1

  let count = 0
  for (count; count < steps; count++){
    let temp = x
    x = y
    y = temp + x
  }

  return x
}
