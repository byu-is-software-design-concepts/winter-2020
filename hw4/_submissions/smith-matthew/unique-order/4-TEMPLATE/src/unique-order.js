
export const uniqueInOrder = str => {
  let arr = []
  let input = str.toString();
  for (let i = 0; i < input.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i])
    } else {
      if (str[i] !== arr[arr.length - 1]) {
        arr.push(str[i])
      }
    }
  }
  return arr
}

uniqueInOrder('ABCDDDE')
