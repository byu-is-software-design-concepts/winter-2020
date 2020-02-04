export const uniqueInOrder = str => {
  let arr = [],
      previousChar = ''
  
  for(let ch of str) {
    if (ch !== previousChar) {
      arr.push(ch)
      previousChar = ch
    }
  }
  return arr
}
