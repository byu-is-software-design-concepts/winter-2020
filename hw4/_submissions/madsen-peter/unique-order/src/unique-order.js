export const uniqueInOrder = str => {
  let arr = []
  const splitArr = str.split("")

  for (let iCount = 0; iCount < str.length; iCount++) {
    if (iCount > 0) {
      if (splitArr[iCount] != splitArr[iCount - 1]) {
        arr.push(splitArr[iCount])
      }
    }
    else {
      arr.push(splitArr[iCount])
    }
  }


  return arr
}
