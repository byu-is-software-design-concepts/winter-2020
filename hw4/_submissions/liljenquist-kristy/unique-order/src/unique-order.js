export const uniqueInOrder = str => {
  let arr = []
  //for str take each letter and only add one of the same to the array
  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i])
    }   
  }
  return arr
}
