export const getFibNumber = steps => {
  // TODO
  let arr = [0, 1]

  for (let i = 0; i < steps + 1; i++) {
    arr[(i + 2)] = (arr[i] + arr[(i + 1)])
  }

  return arr[(arr.length - 3)]
}
