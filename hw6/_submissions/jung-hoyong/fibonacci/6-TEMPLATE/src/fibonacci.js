export const getFibNumber = steps => {
  let a = 1
  let b = 0
  let c = 0
  let num = steps
  let arr = []

  while (num >= 0) {
    arr.push(b)
    c = a
    a = a + b
    b = c
    num--
  }

  return arr[steps]
}
