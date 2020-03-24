export const getFibNumber = steps => {
  let x=0
  let y=1
  for (let index = 0; index < steps; index++) {
    let num = x+y
    y=x
    x=num
  }
  return x
}
