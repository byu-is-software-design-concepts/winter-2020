export const uniqueInOrder = str => {
  let arr = []
  // TODO
  arr = str.split("")
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] === arr[i+1]) {
      arr.splice(i,1)
    }
  }
  return arr
}
