export const uniqueInOrder = str => {
  let arr = []
  let prev = ''
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) != prev) {
      arr.push(str.charAt(i))
      prev = str.charAt(i)
    }
  }
  return arr
}
