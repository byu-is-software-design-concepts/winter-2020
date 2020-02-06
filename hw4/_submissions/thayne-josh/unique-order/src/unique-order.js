export const uniqueInOrder = str => {
  let arr = []
  let currChar = ''
  for(let i = 0; i < str.length; i++) {
    currChar = str[i]
    if(str[i] != currChar) {
      arr.push(str[i])
    }
  }
  return arr
}
