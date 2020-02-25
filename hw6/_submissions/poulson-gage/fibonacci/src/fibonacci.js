export const getFibNumber = steps => {
  const fibArray = [0, 1]

  for (let i = 0; i < steps + 1; i++) {
    fibArray[(i + 2)] = (fibArray[i] + fibArray[(i + 1)])
  }

  return fibArray[(fibArray.length - 3)]
}
