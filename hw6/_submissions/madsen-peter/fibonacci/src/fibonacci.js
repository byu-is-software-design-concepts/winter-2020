export const getFibNumber = steps => {
  let iCount = 0
  const fibArr = [0, 1]
  let finalNum = 0

  for (iCount = 2; iCount < steps + 1; iCount++) {
    fibArr[iCount] = fibArr[iCount - 1] + fibArr[iCount - 2]
    // console.log(fibArr[iCount] + ' | ' + (fibArr[iCount - 1]) + ' | ' + (fibArr[iCount - 2]))
  }

  finalNum = fibArr[steps]

  return finalNum
}
