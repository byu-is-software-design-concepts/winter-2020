export const uniqueInOrder = str => {
  let arr = []
  if (str === '') return []
  arr.push(str[0])
  // TODO
  for (let char of str) {
    if (char !== arr[arr.length - 1]) {
      arr.push(char)
    }
  }
 
  return arr
}
