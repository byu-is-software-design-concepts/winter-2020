export const uniqueInOrder = str => {
  let arr = []
  if (str == '') {
    arr = []
  }
  else {
      arr.push(str[0])
      for (let i =1; i < str.length; i++) {
        if (str[i] != str[i-1]){
          arr.push(str[i])
        }
      }
  }
  return arr
}