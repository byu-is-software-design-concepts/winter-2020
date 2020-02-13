export const uniqueInOrder = str => {
  let arr = []
  // TODO
  for (var i = 0; i < str.length; i++) {
    if (arr.includes(str.charAt(i)) == false) {
      arr.push(str.charAt(i))
    }
  }
  return arr
}
