export const uniqueInOrder = str => {
  let arr = []
  for (var i = 0; i < str.length; i++) {
    if (!arr.includes(str.charAt(i))) {
      arr.push(str.charAt(i));
    }
  }
  return arr
}
