export const uniqueInOrder = str => {
  let arr = str.split('')

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i,1)
      i--
    }
  }

  return arr
}
