export const uniqueInOrder = str => {
  let arr = []
  let i = 0

  if(str.length != 0) {

  while (i < str.length - 1) {
    if(str.charAt(i) != str.charAt(i + 1)) {
      arr.push(str.charAt(i))
    }
    i++;
  }

  if(arr[arr.length] != str.charAt(i)) {
    arr.push(str.charAt(i))
  }
}
    
  return arr
}
