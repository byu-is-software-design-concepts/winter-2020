export const getFibNumber = steps => {
  // TODO
  let x=0
  let y=1
  for (let i=0; i<steps; i++) {
    let num = x + y
    y = x
    x = num
  }
  return x
}
