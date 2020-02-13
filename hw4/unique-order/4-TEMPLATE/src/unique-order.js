export const uniqueInOrder = str => {
  let arr = []
  var last
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== last) {
      result.push(last = str[i])
    }
  }
  
  return arr
}
