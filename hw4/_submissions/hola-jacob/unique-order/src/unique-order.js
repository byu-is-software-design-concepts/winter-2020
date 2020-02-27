export const uniqueInOrder = str => {
  let arr = []
  arr = str.split('')
  
  
  for (let iCount = 0; iCount < arr.length; iCount++) {
    for (let iCount2 = iCount + 1; iCount2 < arr.length; iCount2++) {
      if (arr[iCount] === arr[iCount2]) {
        delete arr[iCount2]
      }
    }
  }
  arr = arr.filter(function (el) {
    return el != null;
  })
  return arr
}
